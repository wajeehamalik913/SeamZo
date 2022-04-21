
// Import React and Component
import React, { useState, Component} from 'react';
import { View, Button, StatusBar, Text, Image,TextInput ,StyleSheet, KeyboardAvoidingView, TouchableOpacity} from 'react-native'
import { useTheme } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import firebase from 'firebase'
import "firebase/firestore";
import {LinearGradient} from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';



    // The signup function that passes the input material of necessary items, for the database
    // First step of the authentication process    

function SignupScreen(props) {

      const [data, setData] = React.useState({
            name: '',
            email:'',
            password: '',
            check_textInputChange: false,
            secureTextEntry: true,
            isValidUser: true,
            isValidPassword: true,
      });


      const onSignUp = (email, password, name ) => {
            
            console.log('HELLO')
            console.log(name)
            // Firebase authenticator function
            firebase.auth().createUserWithEmailAndPassword(email, password)
                  .then((result) => {
                        firebase.firestore().collection("users")
                              .doc(firebase.auth().currentUser.uid)
                              .set({
                                    name,
                                    email,
                                    followingCount: 0,
                                    followerCount: 0
                              })

                        

                        // Just a console log to check the database
                        console.log(firebase.firestore().collection("users"))
                        })
                  .catch((error) => {
                        console.log("This gets called");
                        console.log(error)
                  })
      }

      const { colors } = useTheme();

      const textInputChange = (val) => {
            if( val.trim().length >= 4 ) {
                  setData({
                  ...data,
                  name: val,
                  check_textInputChange: true,
                  isValidUser: true
                  });
            } else {
                  setData({
                  ...data,
                  name: val,
                  check_textInputChange: false,
                  isValidUser: false
                  });
            }
      }

      const emailInputChange = (val) => {
            if( val.trim().length >= 4 ) {
                  setData({
                  ...data,
                  email: val,
                  check_emailInputChange: true,
                  isValidUser: true
                  });
            } else {
                  setData({
                  ...data,
                  email: val,
                  check_emailInputChange: false,
                  isValidUser: false
                  });
            }
      }

      const handlePasswordChange = (val) => {
            if( val.trim().length >= 8 ) {
                  setData({
                  ...data,
                  password: val,
                  isValidPassword: true
                  });
            } else {
                  setData({
                  ...data,
                  password: val,
                  isValidPassword: false
                  });
            }
      }

      const updateSecureTextEntry = () => {
            setData({
                  ...data,
                  secureTextEntry: ! data.secureTextEntry
            });
      }


      return (
            <View style={styles.container}>
                  {/* <StatusBar backgroundColor='#009387' barStyle="light-content"/> */}

                  <View style={styles.header}>
                        <Text style={styles.text_header}>Welcome to SeamZo!</Text>
                  </View>
                  <Animatable.View 
                        animation="fadeInUpBig"
                        style={[styles.footer, {
                        backgroundColor: colors.background
                        }]}
                  >
                        <Text style={[styles.text_footer, {color: colors.text}]}>
                              Email
                        </Text>

                        <View style={styles.action}>
                        <FontAwesome 
                              name="user-o"
                              color={colors.text}
                              size={20}
                        />
                        <TextInput 
                              placeholder="Your Email"
                              placeholderTextColor="#666666"
                              style={[styles.textInput, {color: colors.text}]}
                              autoCapitalize="none"
                              onChangeText={(val) => emailInputChange(val)}
                              //   onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                        />
                       
                        </View>
                        

                        <Text style={[styles.text_footer, {color: colors.text, marginTop: 30}]}>Name</Text>
                        <View style={styles.action}>
                        <FontAwesome 
                              name="user-o"
                              color={colors.text}
                              size={20}
                        />
                        <TextInput 
                              placeholder="Your Name"
                              placeholderTextColor="#666666"
                              style={[styles.textInput, {
                                    color: colors.text
                              }]}
                              autoCapitalize="none"
                              onChangeText={(val) => textInputChange(val)}
                              //   onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                        />
                        {data.check_textInputChange ? 
                        <Animatable.View
                              animation="bounceIn"
                        >
                              <Feather 
                                    name="check-circle"
                                    color="green"
                                    size={20}
                              />
                        </Animatable.View>
                        : null}
                        </View>
                        {/* { data.isValidUser ? null : 
                        <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
                        </Animatable.View>
                        } */}
      
                        

                        <Text style={[styles.text_footer, {color: colors.text, marginTop: 30}]}>Password</Text>
                        <View style={styles.action}>
                              
                        <Feather 
                              name="lock"
                              color={colors.text}
                              size={20}
                        />
                        <TextInput 
                              placeholder="Your Password"
                              placeholderTextColor="#666666"
                              secureTextEntry={data.secureTextEntry ? true : false}
                              style={[styles.textInput, {
                                    color: colors.text
                              }]}
                              autoCapitalize="none"
                              onChangeText={(val) => handlePasswordChange(val)}
                        />
                        <TouchableOpacity
                              onPress={updateSecureTextEntry}>
                                    
                              {data.secureTextEntry ? 
                              <Feather 
                                    name="eye-off"
                                    color="grey"
                                    size={20}
                              />
                              :
                              <Feather 
                                    name="eye"
                                    color="grey"
                                    size={20}
                              />
                              }
                        </TouchableOpacity>
                        </View>
                        { data.isValidPassword ? null : 
                        <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
                        </Animatable.View>
                        }
                        
                        <TouchableOpacity
                              onPress={() => onSignUp(data.email, data.password, data.name )}
                              style={[styles.signIn, {
                                    borderColor: '#009387',
                                    borderWidth: 1,
                                    marginTop: 15
                              }]}
                        >
                              <Text style={[styles.textSign, {
                                    color: '#009387'
                              }]}>Sign Up</Text>
                        </TouchableOpacity>
                        

                  </Animatable.View>
            </View>
      );
}

export default SignupScreen;

const styles = StyleSheet.create({
      container: {
            flex: 1, 
            backgroundColor: '#3CB371'
      },
      header: {
            flex: 1,
            justifyContent: 'flex-end',
            paddingHorizontal: 20,
            paddingBottom: 50
      },
      footer: {
            flex: 5,
            backgroundColor: '#fff',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingHorizontal: 20,
            paddingVertical: 30
      },
      text_header: {
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 30
      },
      text_footer: {
            color: '#05375a',
            fontSize: 18
      },
      action: {
            flexDirection: 'row',
            marginTop: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#f2f2f2',
            paddingBottom: 5
      },
      actionError: {
            flexDirection: 'row',
            marginTop: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#FF0000',
            paddingBottom: 5
      },
      textInput: {
            flex: 1,
            marginTop: Platform.OS === 'ios' ? 0 : -12,
            paddingLeft: 10,
            color: '#05375a',
      },
      errorMsg: {
            color: '#FF0000',
            fontSize: 14,
      },
      button: {
            alignItems: 'center',
            marginTop: 50
      },
      signIn: {
            width: '100%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10
      },
      textSign: {
            fontSize: 18,
            fontWeight: 'bold'
      }
      }
)