import React, {useState} from 'react'
import { View, Text,Image,
   ImageBackground,FlatList, TextInput, TouchableOpacity} from 'react-native'

import firebase from 'firebase';
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
      return (
            <View>
                  <TextInput
                     placeholder="Type Here..."
                    onChangeText={(search) => fetchUsers(search)} />

                  <FlatList
                        numColumns={1}
                        horizontal={false}
                        data={users}
                        renderItem={({ item }) => (
                              <TouchableOpacity
                                    onPress={() => props.navigation.navigate("Profile", {uid: item.id})}>
                                    <Text>{item.name}</Text>
                              </TouchableOpacity>
                           )}
                  />
                  
            </View>
            
      )
}
