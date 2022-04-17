import React, {useContext, useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/core'
import Ionicons from 'react-native-vector-icons/Ionicons';
const pos1=require('../assets/posts/post-img-3.jpg')
import {CreateNft,IssueNft,TransferNft} from '../BlockchainServices/NFT';
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

  const [Nft, setNft] = useState(false)
  const [Nftissued, setNftissued] = useState(false)
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
    
    console.log(item.symbol)
    CreateNft(item.symbol)
    setNft(true);
   
   
  }
  const issueNft = () => {
    
    console.log(item.symbol)
    IssueNft(item.symbol,item.userName,item.post)
    setNftissued(true);
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
           <Interaction >
             <Ionicons name="md-chatbubble-outline" size={25}/>
            <InteractionText>{commentText}</InteractionText>
           </Interaction>
           
           {Nft ? (
                      <>
                        {Nftissued ? (
                            
                            <Interaction onPress={''}>
                            <Ionicons name="pricetags-outline" size={25}/>
                            <InteractionText>Sell NFT</InteractionText>
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