import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import { TouchableOpacity } from 'react-native-web'
import{auth,storage} from '../firebase'
import styled from 'styled-components/native'
import {Container} from '../styles/HomeStyles';
import Post from '../firebaseUtils/post'
import User from '../firebaseUtils/user'
import ProfilePostCard from '../components/ProfilePostCard';
import {getUser} from '../utils/common'

const ProfileScreen = () => {
  const [posts, setPosts] = useState([])
  const [preview, setPreview] = useState(require('../assets/users/user-2.jpg'))
  const imageInputRef = useRef(null)
  const [user,setUser] = useState(undefined)

  //gets all the users post from firebase
  useEffect(() => {
    const post = new Post
    post.all().then(posts => posts && setPosts(posts.filter(post => post.user_id == auth.currentUser.uid)))
    getUser(auth.currentUser.uid).then(res => {
      setUser(res)
      res.profile_img && setPreview(res.profile_img)
    })
  },[])
  const onLogout = () => {
    auth.signOut();
  }
  const handleFileChange = e => {
    const uploadFile = e.target.files[0]
    const upload = storage.ref(`/images/${uploadFile.name}`).put(uploadFile) 
    upload.on('state_changed', snapShot => console.log(snapShot), err => console.log(err), 
    () => storage.ref('images').child(uploadFile.name).getDownloadURL().then(url => {
      setPreview(url)
      const user = new User()
      user.update({profile_img:url})
    }))
  }
const UserImg = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
`;
const UserText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    font-family: 'Lato-Regular';
`;
  return (
    <View style={[styles.container, {flexDirection: "column",justifyContent: 'center'}]}>
      <View style={{ flex: 1, flexDirection: "row", justifyContent: 'center', padding: '14px' }}>
      <View style={{ flex: 1, flexDirection: "column", justifyContent: 'center' }}>
        <input type="file" ref={imageInputRef} hidden onChange={handleFileChange}/>
        <TouchableOpacity onPress={() => imageInputRef.current.click()} style={styles.holder}>
          <UserImg source={preview}/>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, flexDirection: "column", justifyContent: 'center' }}>
        <UserText>UserName</UserText>
      </View>
      <View style={{ flex: 1, flexDirection: "column", justifyContent: 'center' }}>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => onLogout()}>
          <Text style={styles.buttonTextStyle}>LOGOUT</Text>
        </TouchableOpacity>
      </View>
      </View>
      {/* Posts Here */}
      <View style={{ flex: 5 }}>
      <Container style={{backgroundColor: 'transparent'}}>
       <FlatList
        data={posts}
        renderItem={({item})=><ProfilePostCard item={item}/>}
        keyExtractor={item=>item.user_id}
        showsVerticalScrollIndicator={false}/>
       
      </Container>
      </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  buttonStyle: {
    backgroundColor: 'red',
    borderWidth: 0,
    opacity:0.7,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    width: 'fit-content',
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 20,
    
    },
    buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal:20,
    fontSize: 16,
    },
})