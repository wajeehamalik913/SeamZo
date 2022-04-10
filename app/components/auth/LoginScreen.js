import { StatusBar } from "expo-status-bar";
import React, { Component,useState } from 'react'
import { View, Button, Text,ScrollView, Image,TextInput ,StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView} from 'react-native'

import firebase from 'firebase'

console.log("Sign in Called");
class LoginScreen extends Component  {
    
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }

        this.onSignIn = this.onSignIn.bind(this)
    }

    onSignIn() {
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })
            //props.navigate("AddPost")
    }
    
    render() {
        return (
            <View style={styles.container}>

                  <View style = {styles.imageContainer}>
                   <Image style={styles.image} source={require("../../assets/coins.png")} />
                  </View>


                  <View style={styles.SectionStyle} >
                      <TextInput
                      style={styles.inputStyle}
                      
                      placeholder="Email"
                      underlineColorAndroid="#f000"
                      placeholderTextColor="#8b9cb5"
                      
                      onChangeText={(email) => this.setState({email})}
                      />
                  </View>
              
                  <View style={styles.SectionStyle}>
                      <TextInput
                      style={styles.inputStyle}
                      placeholder="Password"
                      underlineColorAndroid="#f000"
                      placeholderTextColor="#8b9cb5"
                      secureTextEntry={true}
                      onChangeText={(password) => this.setState({password})}
                      />
                  </View>
                  
                  

                  <TouchableOpacity style={styles.buttonStyle} onPress={() => this.onSignIn()}>
                      <Text style={styles.buttonTextStyle}>LOGIN</Text>
                  </TouchableOpacity>


                  <TouchableOpacity>
                      <Text style={styles.forgot_button}>Forgot Password?</Text>
                  </TouchableOpacity>
          
            </View>
        );
    }     
}


export default LoginScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    width: 250,
    height: 250,
  },
 
  imageContainer:{
    flex: 1/2,
    alignContent: 'center'
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
  },

  SectionStyle: {
    
    height: 40,
    marginBottom: 20,

  },
  

  inputStyle: {
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },

  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 40,
    
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal:40,
    fontSize: 16,
  }
});