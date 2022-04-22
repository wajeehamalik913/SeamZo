import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-web'
import{auth} from '../firebase'

const ProfileScreen = () => {
  const onLogout = () => {
    auth.signOut();
}
  return (
    <View>
      <TouchableOpacity style={styles.buttonStyle} onPress={() => onLogout()}>
          <Text style={styles.buttonTextStyle}>LOGOUT</Text>  
       </TouchableOpacity>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: 'red',
    borderWidth: 0,
    opacity:0.7,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
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