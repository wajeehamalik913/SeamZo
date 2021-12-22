
// Import React and Component
import React, {useState,Component} from 'react';
import { View, Button, StatusBar, Text, Image,TextInput ,StyleSheet, TouchableOpacity} from 'react-native'


import firebase from 'firebase'
import "firebase/firestore";

console.log("Sign up Called");

class SignupScreen extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            Email: '',
            Password: '',
            Name: ''
        }

        this.onSignUp = this.onSignUp.bind(this)
    }

    onSignUp() {
        const { Email, Password, Name } = this.state;
        firebase.auth().createUserWithEmailAndPassword(Email, Password)
            .then((result) => {
                firebase.firestore().collection("friends")
                    .doc(firebase.auth().currentUser.uid)
                    .set({
                        Name,
                        Email
                    })
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })
    }


    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={require("../../assets/coins.png")} />
            
                <StatusBar style="auto" />

                <View style={styles.inputView}>
                    <TextInput
                    style={styles.TextInput}
                    placeholder="Name"
                    placeholderTextColor="#003f5c"
                    onChangeText={(Name) => this.setState({Name})}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                    style={styles.TextInput}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                    onChangeText={(Email) => this.setState({Email})}
                    />
                </View>
            
                <View style={styles.inputView}>
                    <TextInput
                    style={styles.TextInput}
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(Password) => this.setState({Password})}
                    />
                </View>
            
                <TouchableOpacity>
                    <Text style={styles.forgot_button}>Forgot Password?</Text>
                </TouchableOpacity>
            
                <TouchableOpacity style={styles.loginBtn} onPress={() => this.onSignUp()}>
                    <Text style={styles.loginText}>SIGNUP</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default SignupScreen

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