import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Alert,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';


import {Container,} from '../styles/HomeStyles';

import PostCard from '../components/PostCard';
function mHash() {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var charactersLength = characters.length;
  for ( var i = 0; i < 5; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result.toUpperCase();
}

const Posts = [
  {
    id: '1',
    userName: 'Jenny Doe',
    userImg: require('../assets/users/user-3.jpg'),
    postTime: '4 mins ago',
    post:
      'Hey there, Kepp up!!',
    postImg: require('../assets/posts/post-img-3.jpg'),
    symbol: mHash(),
    liked: true,
    likes: '14',
    comments: '5',
  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: require('../assets/users/user-1.jpg'),
    postTime: '2 hours ago',
    post:
      'Hey there, this is my test for a post of my social app in React Native.',
    postImg: require('../assets/users/user-3.jpg'),
    symbol: mHash(),
    liked: false,
    likes: '8',
    comments: '0',
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require('../assets/users/user-4.jpg'),
    postTime: '1 hours ago',
    post:
      'A long way to go.',
    postImg: require('../assets/posts/post-img-2.jpg'),
    symbol:mHash(),
    liked: true,
    likes: '1',
    comments: '0',
  },
  {
    id: '4',
    userName: 'Selina Paul',
    userImg: require('../assets/users/user-6.jpg'),
    postTime: '1 day ago',
    post:
      'A beautiful evening!!!',
    postImg: require('../assets/posts/post-img-4.jpg'),
    symbol:mHash(),
    liked: true,
    likes: '22',
    comments: '4',
  },
  {
    id: '5',
    userName: 'Christy Alex',
    userImg: require('../assets/users/user-7.jpg'),
    postTime: '2 days ago',
    post:
      'Hey there, this is my test for a post of my social app in React Native.',
    postImg: require('../assets/posts/post-img-5.jpg'),
    symbol:mHash(),
    liked: false,
    likes: '0',
    comments: '0',
  },
];

const HomeScreen = () => {
  
  return (
    
      <Container>
       <FlatList
        data={Posts}
        renderItem={({item})=><PostCard item={item}/>}
        keyExtractor={item=>item.id}
        showsVerticalScrollIndicator={false}
       ></FlatList>
       
      </Container>
    
  );
};

export default HomeScreen;  
