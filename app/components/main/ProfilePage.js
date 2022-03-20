import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, FlatList, Button, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'

import firebase from 'firebase'
require('firebase/firestore')

function Profile(props) {
      
    // Setting constants for the functionality 
      const [userPosts, setUserPosts] = useState([]);
      const [user, setUser] = useState(null);
      const [following, setFollowing] = useState(false)
      
      console.log(firebase.auth().currentUser.uid)
    
        
    useEffect(() => {

      const { currentUser, posts } = props;


            
        // Checking if the user who has entered profile page matches with the argumented user

        // So if it's different then a different route is being taken to show that specific user's posts
        if (props.route.params.uid === firebase.auth().currentUser.uid) {
            setUser(currentUser)
            setUserPosts(posts)
            console.log(user)
            
        } else {
            firebase.firestore()
                .collection("users")
                .doc(props.route.params.uid)
                .get()
                .then((snapshot) => {
                    if (snapshot.exists) {
                        setUser(snapshot.data());
                        console.log('this happens too')
                    }
                    else {
                        console.log('does not exist')
                    }
                })

            // and then that user's posts are being fetched
            firebase.firestore()
                .collection("posts")
                .doc(props.route.params.uid)
                .collection("userPosts")
                .orderBy("creation", "asc")
                .get()
                .then((snapshot) => {
                    let posts = snapshot.docs.map(doc => {
                        const data = doc.data();
                        const id = doc.id;
                        return { id, ...data }
                    })
                    setUserPosts(posts)
                })
        }

        // Checking if this-> User is Following the Clicked Profile or not
        
        if (props.following.indexOf(props.route.params.uid) > -1) {
            setFollowing(true);
        } else {
            setFollowing(false);
        }

    }, [props.route.params.uid, props.following])

    



    // Functionality for the follow 
    const onFollow = () => {
        firebase.firestore()
            .collection("following")
            .doc(firebase.auth().currentUser.uid)
            .collection("userFollowing")
            .doc(props.route.params.uid)
            .set({})
    }

    // and unfollow button
    const onUnfollow = () => {
        firebase.firestore()
            .collection("following")
            .doc(firebase.auth().currentUser.uid)
            .collection("userFollowing")
            .doc(props.route.params.uid)
            .delete()
    }

    // Logout button function triggering Firebase logout 
    const onLogout = () => {
        firebase.auth().signOut();
    }
    
    console.log(userPosts)
    console.log(props.route.params.uid.Name)

        
      return (
            <View style={styles.container}>
            
            <View
                style={styles.containerImage}>
                <View style={styles.nameContainer} >
                    <Image source={{uri:"https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"}} style={{height:50, width:50, borderRadius:100}} />    
                    <Text style={{paddingLeft:10}}>Jon Voe</Text>
                </View>
            </View>
            
                     
            <View style={styles.containerGallery}>
                <FlatList
                    numColumns={3}
                    horizontal={false}
                    data={userPosts}
                    renderItem={({ item }) => (
                        
                        <View
                            style={styles.containerImage}>

                            <Image
                                style={styles.image}
                                source={{ uri: item.downloadURL }}
                            />
                        </View>

                    )}

                />
            </View>

            <View style={styles.containerInfo}>

                {props.route.params.uid !== firebase.auth().currentUser.uid ? (
                    <View>
                        {following ? (
                            <Button
                                title="Following"
                                onPress={() => onUnfollow()}
                            />
                        ) :(
                                <Button
                                    title="Follow"
                                    onPress={() => onFollow()}
                                />
                            )}
                    </View>
                ) :
                    <TouchableOpacity style={styles.buttonStyle} onPress={() => onLogout()}>
                      <Text style={styles.buttonTextStyle}>LOGOUT</Text>
                  </TouchableOpacity>}
            </View>
        </View>
      )
}




const styles = StyleSheet.create({

    logoutButton: {
       
        backgroundColor: '#7DE24E',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#7DE24E',
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        marginTop: 40,

    },

    userText: {
        fontSize: 30
    }, 
    
    
    buttonStyle: {
    backgroundColor: 'red',
    borderWidth: 0,
    opacity:0.7,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 20,
    
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal:20,
    fontSize: 16,
  },

    container: {
        flex: 1,
    },


    
    containerImage: {
        flex: 1,
        resizeMode: 'contain',
        flexDirection: 'column',
        justifyContent:'center',
        paddingHorizontal: 5,
        alignItems: 'center'
    },
    containerInfo: {
        margin: 20
    },
    containerGallery: {
        flex: 1
    },
    nameContainer: {
        flexDirection: 'row',
        paddingVertical: 10,
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    interactionContainer: {
        justifyContent:'center',
        paddingVertical: 2,
        display: 'flex',
        flexDirection: 'row'
    },
    containerImage: {
        flex: 1 / 3

    },
    image: {
        flex: 1,
        aspectRatio: 1 / 1
    }
})

const mapStateToProps = (store) => ({
      currentUser: store.userState.currentUser,
      posts: store.userState.posts,
      following: store.userState.following
})
export default connect(mapStateToProps, null)(Profile);