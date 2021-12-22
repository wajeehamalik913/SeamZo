import { StatusBar } from "expo-status-bar";
import React, { Component,useState } from 'react'
import { View, Button, Text,ScrollView, Image,TextInput ,StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView} from 'react-native'

import firebase from 'firebase'

console.log("Sign in Called");
class LoginScreen extends Component {
    
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
    }
    
    render() {
        return (
            <View style={styles.container}>
              <TouchableWithoutFeedback onPress={ () => { DismissKeyboard() } }>
                <Image style={styles.image} source={require("../../assets/coins.png")} />
            
                  <StatusBar style="auto" />
  
                  <View style={styles.inputView} >
                      <TextInput
                      style={styles.TextInput}
                      
                      placeholder="Email"
                      placeholderTextColor="#003f5c"
                      
                      onChangeText={(email) => this.setState({email})}
                      />
                  </View>
              
                  <View style={styles.inputView}>
                      <TextInput
                      style={styles.TextInput}
                      placeholder="Password"
                      placeholderTextColor="#003f5c"
                      secureTextEntry={true}
                      onChangeText={(password) => this.setState({password})}
                      />
                  </View>
              
                  <TouchableOpacity>
                      <Text style={styles.forgot_button}>Forgot Password?</Text>
                  </TouchableOpacity>
              
                  <TouchableOpacity style={styles.loginBtn} onPress={() => this.onSignIn()}>
                      
                      <Text style={styles.loginText}>LOGIN</Text>
                  </TouchableOpacity>
    
                </TouchableWithoutFeedback>
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
    marginBottom: 40,
  },
 
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
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
});