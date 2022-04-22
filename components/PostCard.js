import React, {useContext, useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/core'
import Ionicons from 'react-native-vector-icons/Ionicons';
const pos1=require('../assets/posts/post-img-3.jpg')
import {CreateNft,IssueNft} from '../BlockchainServices/NFT';
import {
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
  Liked,
  NotLiked
} from '../styles/HomeStyles';
import {getUser} from '../utils/common'
import { auth } from '../firebase';


const PostCard = ({item}) => {

  const [Nft, setNft] = useState(false)
  const [Nftissued, setNftissued] = useState(false)
  // var likeIcon = item.like ? 'heart' : 'heart-outline';
  var likeIcon = 'heart';
  var likeIonColor = '#2e64e5' ;
  const [user, setUser] = useState(undefined)

// This gets the user data from users collection in firestore on the base of user Id
  useEffect(() => {
    if(!item.user_id) return
    getUser(item.user_id).then(res => setUser(res))
  },[item])

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
  
//this function creates the Nft  and adds it into EOS blockchain
  const createNft = () => {
    
    console.log(item.symbol)
    CreateNft(item.symbol)
    setNft(true);
  }
//this funtion issues the NFT to the users
  const issueNft = () => {
    
    console.log(item.symbol)
    IssueNft(item.symbol,user.username,item.description)
    setNftissued(true);
  }

  if(!item || !user) return null
  return (
    
    <Card>
         <UserInfo>
           <UserImg source={require('../assets/users/user-1.jpg')}/>
           <UserInfoText>
            <UserName>{user.username}</UserName>
            <PostTime>{item.posted_on}</PostTime>
           </UserInfoText>
         </UserInfo>
         <PostText>{item.description}</PostText>
         {/* <PostImg source={require('../assets/posts/post-img-4.jpg')}/> */}
         {item.postImg != 'none' ? <PostImg source={item.post_image}/>: <Divider/>}
         <InteractionWrapper>
           {/* if the post is liked it changes the color of heart icon */}
           {item.likes.includes(auth.currentUser.uid) ? (
             <Liked >
             <Ionicons name={'heart'}  size={25} color={likeIonColor}/>
             <InteractionText>{item.likes.length ? item.likes.length+' Likes' : 'Like'}</InteractionText>
            </Liked>
           ) : (
            <NotLiked >
            <Ionicons name={'heart-outline'}  size={25} color={likeIonColor}/>
            <InteractionText>{item.likes.length ? item.likes.length+' Likes' : 'Like'}</InteractionText>
            </NotLiked>
           )}
           <Interaction >
             <Ionicons name="md-chatbubble-outline" size={25}/>
            <InteractionText>{commentText}</InteractionText>
           </Interaction>
           {/* checks if the post is already an NFT then shows the NFT text else 
              shows the button to create and issue button */}
           {Nft ? (
                      <>
                        {Nftissued ? (
                            
                            <Interaction onPress={''}>
                            <Ionicons name="pricetags-outline" size={25}/>
                            <InteractionText>NFT</InteractionText>
                          </Interaction>
                        ) :(
                          <Interaction id='create-nft-btn' onPress={issueNft}>
                          <Ionicons name="pricetags-outline" size={25}/>
                          <InteractionText>Issue NFT</InteractionText>
                        </Interaction>
                            )}
                            </>
                            
                  ) :(
                          <Interaction id='create-nft-btn' onPress={createNft}>
                          <Ionicons name="pricetags-outline" size={25}/>
                          <InteractionText>Create NFT</InteractionText>
                        </Interaction>
                            )}
                    
         </InteractionWrapper>
       </Card>
  );
};

export default PostCard;