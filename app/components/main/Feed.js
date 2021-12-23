import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Image, FlatList, Button, TouchableOpacity } from 'react-native'

import firebase from 'firebase'
require('firebase/firestore')
import { connect } from 'react-redux'

function Feed(props) {
    const [posts, setPosts] = useState([
        require('../../assets/image1.jpg'),
        require('../../assets/image2.jpg'),
        require('../../assets/image3.jpg'),
        require('../../assets/image4.jpg'),
        require('../../assets/image5.jpg')
    ]);

    
    return (
        <View style={styles.container}>
            <View style={styles.containerGallery}>
                <FlatList
                    numColumns={1}
                    horizontal={false}
                    data={posts}
                    ItemSeparatorComponent={() => (
                        <View
                        style={{height: 0.8, backgroundColor: "grey", opacity:0.5}}></View>
                    )}
                    renderItem={({ item }) => (
                        <View
                            style={styles.containerImage}>
                            <View style={styles.nameContainer} >
                                <Image source={{uri:"https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"}} style={{height:50, width:50, borderRadius:100}} />    
                                <Text style={{paddingLeft:10}}>Jon Voe</Text>
                            </View>
                            <Image
                                style={styles.image}
                                source={ item }
                            />
                            <View style = {styles.interactionContainer} > 


                                {/*Like and comment buttons for display and later on functionality  */}
                                <Button
                                    title="Like"
                                    onPress={() => onLikePress(item.user.uid, item.id)} />
                    
                                <Button
                                    onPress={() => props.navigation.navigate('Comment', {  })}
                                    title="Comments"/>
                            </View>
                            
                        </View>

                    )}

                />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
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
    container: {
        flex: 1,
    },
    containerInfo: {
        margin: 20,
        justifyContent: 'space-between',
    },
    containerGallery: {
        flex: 1,
        justifyContent: 'space-between',
    },
    containerImage: {
        flex: 1,
        resizeMode: 'contain',
        flexDirection: 'column',
        justifyContent:'center',
        paddingHorizontal: 5
    },
    image: {
        flex: 1,
        aspectRatio: 1 / 1
    }
})

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser,
})
export default connect(mapStateToProps, null)(Feed);
