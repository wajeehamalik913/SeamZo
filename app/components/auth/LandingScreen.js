
import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  Button,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import Loader from '../Loader.js';

function LandingScreen  ({navigation}){
  
  return (
    <View style = {styles.mainBody} >
     <Image style={{
            resizeMode: "contain",
            marginTop:50,
            height: 300,
            width: 300}} 
            source = {require('../../assets/coins.png')} />
    
     <Image style={{
            resizeMode: "contain",
            height: 400,
            marginTop:1,
            bottom:180,
            width: 400}} 
            source = {require('../../assets/seamzo.png')} />

    <View style={styles.simpleHeader}>

          </View>
      <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={() => navigation.navigate("UalRenderer")} >
              <Text style={styles.buttonTextStyle}>SignUp Now</Text>
        </TouchableOpacity>
       <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={() => navigation.navigate("LoginScreen")} >
              <Text style={styles.buttonTextStyle}>Login Now</Text>
        </TouchableOpacity>
              

      <TouchableOpacity>
         <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>


    </View>

        
    

    
  );
};
export default LandingScreen;

const styles = StyleSheet.create({
  mainBody: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
  simpleHeader: {
    flex: 1
    
  },  

  heading :{
    fontSize:30,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignContent: 'center'
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  registerButton: {
    flexDirection: 'row',
    color: "black",
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  loginButton: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  coinsImage: {
        flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
    bottom:100
    
  },
  
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 40,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  registerTextStyle: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});
