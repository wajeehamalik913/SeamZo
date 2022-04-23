import React, {useEffect, useState} from 'react';
import { FlatList} from 'react-native';
import {Container} from '../styles/HomeStyles';
import Post from '../firebaseUtils/post'
import PostCard from '../components/PostCard';
import { auth } from '../firebase';

const HomeScreen = () => {
  const [posts, setPosts] = useState([])
  //gets all the users post from firebase
  useEffect(() => {
    const post = new Post
    post.all().then(posts => posts && setPosts(posts.filter(post => post.user_id !== auth.currentUser.uid)))
  },[])
  return (
     /*Displays the post by passing the posts array to post card 
     that has the model for a post display design*/
      <Container>
       <FlatList
        data={posts}
        renderItem={({item})=><PostCard item={item}/>}
        keyExtractor={item=>item.user_id}
        showsVerticalScrollIndicator={false}/>
       
      </Container>
    
  );
};

export default HomeScreen;  
