import React, {useContext, useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/core'
import Ionicons from 'react-native-vector-icons/Ionicons';
const pos1=require('../assets/posts/post-img-3.jpg')
import {
  Container,
  Card,
  UserInfo,
  UserImg,
  UserName,
  UserInfoText,
  PostTime,
  PostText,
  PostImg,
  InteractionWrapper,
  Interaction,
  InteractionText,
  Divider,
} from '../styles/HomeStyles';



const PostCard = ({item}) => {

  var likeIcon = item.liked ? 'heart' : 'heart-outline';
  var likeIonColor = item.liked ? '#2e64e5' : '#333';
 
  const navigation = useNavigation()

  if(item.likes==1){
    var likeText='1 Like'
  } else if (item.likes>1){
    var likeText= item.likes + ' Likes'
  } else{
    var likeText='Like'
  }

  if(item.comments==1){
    var commentText='1 Comment'
  } else if (item.comments>1){
    var commentText= item.comments + ' Comments'
  } else{
    var commentText='Comment'
  }
  // var nft=false;
  // useEffect(() => {
  //   if(nft==true){

  //     navigation.replace("Login")
  //   }
    
  // }, [])
  const createNft = () => {
    // nft=true;
    navigation.replace("Login")
  }

  return (
    <Card>
         <UserInfo>
           <UserImg source={item.userImg}/>
           <UserInfoText>
            <UserName>{item.userName}</UserName>
            <PostTime>{item.postTime}</PostTime>
           </UserInfoText>
         </UserInfo>
         <PostText>{item.post}</PostText>
         {/* <PostImg source={require('../assets/posts/post-img-4.jpg')}/> */}
         {item.postImg != 'none' ? <PostImg source={item.postImg}/>: <Divider/>}
         <InteractionWrapper>
           <Interaction active={item.liked}>
             <Ionicons name={likeIcon}  size={25} color={likeIonColor}/>
             <InteractionText active={item.liked}>{likeText}</InteractionText>
           </Interaction>
           <Interaction>
             <Ionicons name="md-chatbubble-outline" size={25}/>
            <InteractionText>{commentText}</InteractionText>
           </Interaction>
           <Interaction onPress={createNft}>
             <Ionicons name="pricetags-outline" size={25}/>
             <InteractionText>Create NFT</InteractionText>
           </Interaction>
         </InteractionWrapper>
       </Card>
  );
};

export default PostCard;