import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet,Image, View, Text, media, TextInput, Dimension, FlatList, Button, StatusBar,  TouchableOpacity, RefreshControl } from 'react-native'

import firebase from 'firebase'
require('firebase/firestore')
import { connect } from 'react-redux'

function Feed(props) {

//     const [isLoading, setLoading] = useState(false)
//     const [listData, setListData] = useState([]);

      const [posts, setPosts] = useState([]);
      const [refreshing, setRefreshing] = useState(false)
      const [unmutted, setUnmutted] = useState(null)
      const [inViewPort, setInViewPort] = useState(0)
      const [sheetRef, setSheetRef] = useState(useRef(null))
      const [modalShow, setModalShow] = useState({ visible: false, item: null })
      const [isValid, setIsValid] = useState(true);
            
      useEffect(() => {
           
                  
            
            // firebase.firestore()
            //       .collection("users")
            //       .doc(props.route.params.uid)
            //       .get()
            //       .then((snapshot) => {
            //             if (snapshot.exists) {
            //                   setUser(snapshot.data());
            //                   console.log('this happens too')
            //             }
            //             else {
            //                   console.log('does not exist')
            //             }
            // })

            // and then that user's posts are being fetched
            firebase.firestore()
                  .collection("posts")
                  .doc(firebase.auth().currentUser.uid)
                  .collection("userPosts")
                  .orderBy("creation", "asc")
                  .get()
                  .then((snapshot) => {
                        let posts = snapshot.docs.map(doc => {
                              const data = doc.data();
                              const id = doc.id;
                              return { id, ...data }
                        })
                        setPosts(posts)
            })

      }, [props.usersFollowingLoaded, props.feed])
      
      return (
            <SafeAreaView style = {styles.container}>
                  
                  
                  <FlatList

                  /* refreshControl={
                        <RefreshControl refreshing={isLoading} onRefresh={async () => {
                              setLoading(true)
                              await fetchFeed()
                              setLoading(false)
                        }} />
                  } */

                  numColumns={1}
                  horizontal={false}
                  data={posts}
                  keyExtractor={(item) => item.id}

                  renderItem={({ item }) => 

                  <View style={styles.flatlistContainer}>
                        {/* <Text> {item.user.Name} </Text> */}
                        <View style={styles.profileHeader} >

                              <Image 
                              source= {require('../../assets/profile-pic.jpg')} 
                              style={styles.profileImage} 
                              />    

                              <Text style={styles.profileText}>Clark Kent</Text>

                        </View>

                        <View>
                              <Image
                              style={styles.mediaImageContainer}
                              resizeMode= 'center'
                              source={{ uri: item.downloadURL }}
                              />
                        </View>

                        <View style={styles.interactionBar}>
                              
                              <TouchableOpacity style={styles.interactionButton}>
                              <Text style={styles.interactionText}>Like</Text>
                              </TouchableOpacity>

                              <View style={styles.interactionMargin} />

                              <TouchableOpacity style={styles.interactionButton}>
                              <Text style={styles.interactionText}>Comment</Text>
                              </TouchableOpacity>
                        </View>

                  </View>}           
                  />


            </SafeAreaView>
            )
      }



const styles = StyleSheet.create ({

      container: {
            flex: 1,
            backgroundColor: "#fff"
      },
      
      flatlistContainer: {
            margin: 10, 
            borderRadius: 7, 
            elevation: 5,
            backgroundColor: "white", 
            shadowColor: '#333',               
            shadowOffset: { width: 0, height: 1 },           
            shadowOpacity: 0.5,              
            shadowRadius: 2,
      },

      profileHeader: {
            flexDirection: "row", 
            alignItems: "center", 
            padding: 10,
      },  

      profileImage: {
            width: 50,
            height: 50,
            borderRadius: 50,

            overflow: "hidden"
      },

      profileText: {
            paddingLeft:10, 
            fontSize:16
      },

      mediaImageContainer: {
      
            width: 340,
            height: 300,
            borderRadius: 6,
            marginHorizontal: 10
      },

      interactionBar: {
            justifyContent:'center',
            paddingVertical: 2,
            flexDirection: 'row'
      },

      interactionButton: {
            flex: 1,
            margin: 10 
      },

      interactionText: {
            textAlign: "center", 
            fontWeight: "bold"
      },

      interactionMargin: {
            backgroundColor: "#3333", 
            height: "100%", 
            width: 1
      },   
});

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser,
    following: store.userState.following,
    users: store.usersState.users,
    usersFollowingLoaded: store.usersState.usersFollowingLoaded
})
export default connect(mapStateToProps, null)(Feed);
