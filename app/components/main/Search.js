import React, {useState} from 'react'
import { View, Text,Image, ImageBackground, FlatList, TextInput, TouchableOpacity, colors, StyleSheet} from 'react-native'

import firebase from 'firebase';
import { Searchbar } from 'react-native-paper';
require('firebase/firestore');

export default function Search(props) {
      
      const [users, setUsers] = useState([])


      // FetchUsers function as being called inside the redux store . actions.js

   
      const fetchUsers = (search) => {
            firebase.firestore()
                  .collection('users')
                  .where('name', '>=', search)
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
                  <Searchbar
                        placeholder="Search a User..."
                        onChangeText={(search) => fetchUsers(search)} />
                  { users.map((item) => {
                        return (
                              <View key={item.id} >
                                    <TouchableOpacity onPress={() => props.navigation.navigate("ProfilePage", {uid: item.id})}> 
                                          <Text>
                                                {item.name}
                                          </Text>
                                          
                                          
                                    </TouchableOpacity>
                              </View>
                        )
                  })}
                  
                  
                  
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
