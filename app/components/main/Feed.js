import React, { useState, useEffect } from 'react'
import { SafeAreaView, ScrollView, StyleSheet,Image, View, Text, media, TextInput, Dimension, FlatList, Button, StatusBar,  TouchableOpacity, RefreshControl } from 'react-native'

import firebase from 'firebase'
require('firebase/firestore')
import { connect } from 'react-redux'

function Feed(props) {

    const [isLoading, setLoading] = useState(false)
    const [listData, setListData] = useState([]);

    const [posts, setPosts] = useState([
        require('../../assets/media1.jpg'),
        require('../../assets/media2.jpg'),
        require('../../assets/media3.jpg'),
    ]);

    
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
                            source={ item }
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
})
export default connect(mapStateToProps, null)(Feed);
