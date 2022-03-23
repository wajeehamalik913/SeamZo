import React, {useState} from 'react'
import { View, Text,Image,
   ImageBackground,FlatList, TextInput, TouchableOpacity, colors, StyleSheet} from 'react-native'

import firebase from 'firebase';
import { Searchbar } from 'react-native-paper';
require('firebase/firestore');

export default function Search(props) {
      const [images, setimages] = useState([
            require('../../assets/image.jpg'),
            require('../../assets/image1.jpg'),
            require('../../assets/image2.jpg'),
            require('../../assets/image3.jpg'),
            require('../../assets/image4.jpg'),
            require('../../assets/image5.jpg'),
            require('../../assets/image6.jpg'),
            require('../../assets/image7.jpg'),
            require('../../assets/image8.jpg')
   ]);


   const [users, setUsers] = useState([])


   // FetchUsers function as being called inside the redux store . actions.js

   
    const fetchUsers = (search) => {
        firebase.firestore()
            .collection('users')
            .where('Name', '>=', search)
            .get()
            .then((snapshot) => {
                let users = snapshot.docs.map(doc => {
                    const data = doc.data();
                    const id = doc.id;
                    return { id, ...data }
                });
                setUsers(users);
                console.log(users)
            })
        }
        console.log(users)
      return (
            <View>
                  <Searchbar
                        placeholder="Search a User..."
                        onChangeText={(search) => fetchUsers(search)} />
                  
                  <FlatList
                        style = {styles.flatList}
                        numColumns={1}
                        horizontal={false}
                        data={users}
                        ItemSeparatorComponent={() => (
                        <View
                              style={{height: 0.5, backgroundColor: 'grey',paddingBottom:10}}></View>
                        )}
                        

                        renderItem={({ item }) => (
                              
                              <TouchableOpacity 
                                    style={{paddingBottom:10}}
                                    onPress={() => props.navigation.navigate("ProfilePage", {uid: item.id})}>
                                         <View
                                          style={{
                                                width: 45,
                                                height: 45,
                                                flexDirection: 'row',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                backgroundColor: 'grey',
                                                borderRadius: 100,
                                    }}>
                                          <Text style={[styles.name, {color: 'white'}]}>
                                                {item.Name[0]}
                                          </Text>
                                    </View>   
                                    <Text styles = {styles.textBox}>
                                          
                                          {item.Name}</Text>

                                    <Text styles = {styles.textBox}>
                                          
                                          {item.Email}</Text> 
                                    
                              </TouchableOpacity>
                        )}
                  />
                  
            </View>
            
      )
}

const styles = StyleSheet.create({
      textBox: {
            fontSize:50
      },
      flatList:{
            flex:1
      },
      name: {fontSize: 17},

})
