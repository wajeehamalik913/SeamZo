import React, { useState, useEffect } from 'react'
import {  ScrollView, StyleSheet, View, Text, Image, TextInput, Dimension, FlatList, Button, StatusBar,  TouchableOpacity } from 'react-native'

import { connect } from 'react-redux'
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import firebase from 'firebase'
import { SafeAreaView } from 'react-native-safe-area-context'
require('firebase/firestore')

function Profile(props) {
      
    // Setting constants for the functionality 
      const [userPosts, setUserPosts] = useState([]);
      const [user, setUser] = useState(null);
      const [following, setFollowing] = useState(false)
      
    
        
      useEffect(() => {

            const { currentUser, posts } = props;

            // Checking if the user who has entered profile page matches with the argumented user

            // So if it's different then a different route is being taken to show that specific user's posts
            if (props.route.params.uid === firebase.auth().currentUser.uid) {
                  setUser(currentUser)
                  setUserPosts(posts)
                  
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
            

            //This basically checks if the following user exists in the list of following 
            if (props.following.indexOf(props.route.params.uid) > -1) {
                  setFollowing(true);
            } else {
                  setFollowing(false);
            }

      }, [props.route.params.uid, props.following,props.currentUser, props.posts])

    



    // Functionality for the follow 
      const onFollow = () => {
            firebase.firestore()
                  .collection("following")
                  .doc(firebase.auth().currentUser.uid)
                  .collection("userFollowing")
                  .doc(props.route.params.uid)
                  .set({})

            firebase.firestore()
                  .collection("users")
                  .doc(firebase.auth().currentUser.uid)
                  .update ( {} )
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


    const getName= () => {
          console.log(user);

    }
    
    //console.log(userPosts)
    
//     console.log(props.route.params.uid.Name)

        
      return (
            
            <SafeAreaView style={styles.container}>
            
            {/* <ScrollView showsVerticalScrollIndicator={false}> */}
                  <View style = {styles.titleBar}>
                        <Ionicons name = "ios-arrow-back" size = {24} color = "#52575D"></Ionicons>
                  </View>

                  <View style={{ alignSelf: "center" }}>

                        <View style={styles.profileImage}>
                              <Image source={require("../../assets/profile-pic.jpg")} style={styles.image} resizeMode="center"></Image>
                        </View>
                  
                        <View style={styles.active}></View>

                        <View style={styles.add}>
                              <Ionicons name="ios-add" size={20} color="#DFD8C8" style={{ marginTop: 6, marginLeft: 2 }}></Ionicons>
                        </View>
                  </View>

                  <View style={styles.infoContainer}>
                        <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>{getName()}</Text>
                        
                        <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>Hi, I use SeamZo</Text>
                  </View>

                  <View style={styles.statsContainer}>
                        <View style={styles.statsBox}>
                              <Text style={[styles.text, { fontSize: 24 }]}>0</Text>
                              <Text style={[styles.text, styles.subText]}>Posts</Text>
                        </View>
                        <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
                              <Text style={[styles.text, { fontSize: 24 }]}>0</Text>
                              <Text style={[styles.text, styles.subText]}>Followers</Text>
                        </View>
                        <View style={styles.statsBox}>
                              <Text style={[styles.text, { fontSize: 24 }]}>1</Text>
                              <Text style={[styles.text, styles.subText]}>Following</Text>
                        </View>
                  </View>
                  
            {/* </ScrollView> */}
                  <View style={styles.containerGallery}>
                        <FlatList
                              numColumns={3}
                              horizontal={false}
                              data={userPosts}
                              
                              renderItem={({ item }) => (
                                    
                                    <View style={styles.mediaImageContainer}>
                                          <Image
                                                style={styles.imagePost}
                                                resizeMode="contain"
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
        </SafeAreaView>
        
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

      
      
      containerImage: {
            flex: 1,
            resizeMode: 'contain',
            flexDirection: 'column',
            justifyContent:'center',
            paddingHorizontal: 5,
            alignItems: 'center'
      },

      imagePost : {
            flex: 1,
            height:150,
            width: 150,
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

      container: {
            flex: 1,
            backgroundColor: "#fff"
      },
      text: {
            fontFamily: "HelveticaNeue",
            color: "#52575D"
      },
      image: {
            flex: 1,
            height: undefined,
            width: undefined
      },
      titleBar: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 24,
            marginHorizontal: 16
      },
      subText: {
            fontSize: 12,
            color: "#AEB5BC",
            textTransform: "uppercase",
            fontWeight: "500"
      },
      profileImage: {
            width: 100,
            height: 100,
            borderRadius: 100,
            overflow: "hidden"
      },

      active: {
            backgroundColor: "#34FFB9",
            position: "absolute",
            bottom: 28,
            left: 10,
            padding: 4,
            height: 20,
            width: 20,
            borderRadius: 10
      },
      add: {
            backgroundColor: "#41444B",
            position: "absolute",
            bottom: 0,
            right: 0,
            width: 25,
            height: 25,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center"
      },
      infoContainer: {
            alignSelf: "center",
            alignItems: "center",
            marginTop: 16
      },
      statsContainer: {
            flexDirection: "row",
            alignSelf: "center",
            marginTop: 32
      },
      statsBox: {
            alignItems: "center",
            flex: 1
      },

      mediaImageContainer: {
            flex: 1,
            resizeMode: 'contain',
            flexDirection: 'column',
            justifyContent:'center',
            //paddingHorizontal: 5,
            alignItems: 'center',
            borderRadius: 12,
      },
      mediaCount: {
            backgroundColor: "#41444B",
            position: "absolute",
            top: "50%",
            marginTop: -50,
            marginLeft: 30,
            width: 80,
            height: 80,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 12,
            shadowColor: "rgba(0, 0, 0, 0.38)",
            shadowOffset: { width: 0, height: 10 },
            shadowRadius: 20,
            shadowOpacity: 1
      },
      recent: {
            marginLeft: 78,
            marginTop: 32,
            marginBottom: 6,
            fontSize: 10
      },
      recentItem: {
            flexDirection: "row",
            alignItems: "flex-start",
            marginBottom: 16
      },
      activityIndicator: {
            backgroundColor: "#CABFAB",
            padding: 4,
            height: 12,
            width: 12,
            borderRadius: 6,
            marginTop: 3,
            marginRight: 20
      }
})

const mapStateToProps = (store) => ({
      currentUser: store.userState.currentUser,
      posts: store.userState.posts,
      following: store.userState.following
})
export default connect(mapStateToProps, null)(Profile);