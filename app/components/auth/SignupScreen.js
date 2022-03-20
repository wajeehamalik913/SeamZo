
// Import React and Component
import React, {useState,Component} from 'react';
import { View, Button, StatusBar, Text, Image,TextInput ,StyleSheet, KeyboardAvoidingView, TouchableOpacity} from 'react-native'


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

    // The signup function that passes the input material of necessary items, for the database
    // First step of the authentication process

    onSignUp() {
        const { Email, Password, Name } = this.state;

        // Firebase authenticator function
        firebase.auth().createUserWithEmailAndPassword(Email, Password)
            .then((result) => {
                firebase.firestore().collection("users")
                    .doc(firebase.auth().currentUser.uid)
                    .set({
                        Name,
                        Email
                    })

                console.log(result)

                // Just a console log to check the database
                console.log(firebase.firestore().collection("users"))
            })
            .catch((error) => {
                console.log(error)
            })
    }


    render() {
        return (
            
            <View style={styles.mainBody}>

                <View style={{alignItems: 'center'}}>
                    <Image
                        source={require('../../assets/coins.png')}
                        style={{
                        width: 350,
                        height: 350,
                        resizeMode: 'contain',
                        }} 
                    />
                </View>
                
                <KeyboardAvoidingView enabled>
                <View style={styles.SectionStyle}>
                    <TextInput
                    style={styles.inputStyle}
                    onChangeText={(Name) => this.setState({Name})}
                    underlineColorAndroid="#f000"
                    placeholder="Enter Name"
                    placeholderTextColor="#8b9cb5"
                    autoCapitalize="sentences"
                    blurOnSubmit={false}
                    />
                </View>
                <View style={styles.SectionStyle}>
                    <TextInput
                    style={styles.inputStyle}
                    onChangeText={(Email) => this.setState({Email})}
                    underlineColorAndroid="#f000"
                    placeholder="Enter Email"
                    placeholderTextColor="#8b9cb5"
                    keyboardType="email-address"
                    blurOnSubmit={false}
                    />
                </View>
                <View style={styles.SectionStyle}>
                    <TextInput
                    style={styles.inputStyle}
                    onChangeText={(Password) => this.setState({Password})}
                    underlineColorAndroid="#f000"
                    placeholder="Enter Password"
                    placeholderTextColor="#8b9cb5"
                    returnKeyType="next"
                    secureTextEntry={true}
                    blurOnSubmit={false}
                    />
                </View>
                
                
                <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}
                    onPress={() => this.onSignUp()}>
                    <Text style={styles.buttonTextStyle}>REGISTER</Text>
                </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        );
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

  mainBody: {
      backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
 
  image: {
    marginBottom: 40,
  },
 
  inputView: {
    backgroundColor: "#dadae8",
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
  SectionStyle: {
    height: 45,
    
    marginBottom: 20,
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
    fontSize: 16,
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
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
});