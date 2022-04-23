import { useNavigation } from '@react-navigation/core'
import * as Animatable from 'react-native-animatable';
import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebase' //imports firebase configuration
import User from '../firebaseUtils/user' //imports user class to be used to add user to firebase

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [walletName, setWalletName] = useState('')
  const [username, setUsername] = useState('')
  const [isSignUpMode, setIsSignUpMode] = useState(false)

  const navigation = useNavigation()

 
/* This function checks that if the user is in signup mode 
    and  used to display signup screen*/
  const handleInput = () => {
    if(isSignUpMode) return handleSignUp()
    else handleLogin()
  }
/* This functions handles signup when user registers it creates firebase user 
and adds user information to users collection */
  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const auth = userCredentials.user;

        //creating user class object and save data to firebase
        const user = new User({
          uid:auth.uid,
          name,
          username,
          email,
          password,
          wallet_acc:''
        })
        user.save().then(() => navigation.navigate({ name: 'SeamZo', merge: true }))
      })
      .catch(error => alert(error.message))
  }

 /* This function handles login when user login it use firebase authentication 
 to vaerify users credentials */ 
  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
        navigation.navigate({ name: 'SeamZo', merge: true })
      })
      .catch(error => alert(error.message))
  }
  const  handleAnchor = () => {
    navigation.replace('Anchor')
  }
 
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <View >
                  <Animatable.Image 
                        animation="bounceIn"
                        duraton="2000"
                  source = {require ("../assets/seamzo.png")}
                  style = {styles.logo}
                  resizeMode = 'stretch'
                  />
            </View>
      <View style={styles.inputContainer}>
        {isSignUpMode && (
          <>
          <TextInput
          placeholder="name"
          value={name}
          onChangeText={text => setName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={text => setUsername(text)}
          style={styles.input}
        />
          </>
        )}
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleInput}
          style={styles.button}
        >
          <Text style={styles.buttonText}>{isSignUpMode ? 'Register' : 'Login'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIsSignUpMode(!isSignUpMode)}
          style={[styles.button, styles.buttonOutline]}
        > 
          <Text style={styles.buttonOutlineText}>{isSignUpMode ? 'Login' : 'Register'}</Text>
        </TouchableOpacity>
        
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  logo:{
    
    width: 300,
    height: 250,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#43B07A',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: '#f8f8f8',
    marginTop: 5,
    borderColor: '#43B07A',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#218F58',
    fontWeight: '700',
    fontSize: 16,
  },
})