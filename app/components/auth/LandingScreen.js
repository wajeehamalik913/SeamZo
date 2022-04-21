import React, {useState, createRef} from 'react';
import { StyleSheet, Button, TextInput, View, Text, ScrollView, Image, Keyboard, TouchableOpacity, KeyboardAvoidingView} from 'react-native';

import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';

import Loader from '../Loader.js';


function LandingScreen  ({navigation}){
      const { colors } = useTheme();
      return (
    
      <View style={styles.body}>
            <View style = {styles.header}>
                  <Animatable.Image 
                        animation="bounceIn"
                        duraton="2000"
                  source = {require ("../../assets/seamzo.png")}
                  style = {styles.logo}
                  resizeMode = 'stretch'
                  />
            </View>
                  <Animatable.View 
                        style={[styles.footer, {
                        backgroundColor: colors.background
                        }]}
                        animation="fadeInUpBig"
            >
                        <Text style={[styles.title, {color: colors.text}]}>NFT Social Media Platform!</Text>
                        <Text style={styles.text}>Sign in with account</Text>
                        <View style={styles.button}>
                              <TouchableOpacity onPress={()=> navigation.navigate('SignupScreen')}>
                                    <Text style={styles.textSign}>Get Started</Text>
                                    <MaterialIcons 
                                          name="navigate-next"
                                          color="#fff"
                                          size={20}
                                    />
                              </TouchableOpacity>
                              <TouchableOpacity onPress={()=> navigation.navigate('LoginScreen')}>
                                    <Text style={styles.textSign}>Login</Text>
                                    <MaterialIcons 
                                          name="navigate-next"
                                          color="#fff"
                                          size={20}
                                    />
                              </TouchableOpacity>
                        </View>
                  </Animatable.View>
      </View>

      );
};
export default LandingScreen;

const styles = StyleSheet.create({
      body: {
            flex: 1,
            backgroundColor: '#D3D3D3',
      },
      header: {
            flex: 2,
            justifyContent: 'center',
            alignContent: 'center',
      },

      footer: {
            flex: 1,
            backgroundColor: '#fff',
            borderTopLeftRadius:30,
            borderTopRightRadius: 30,
            paddingVertical: 50,
            paddingHorizontal: 30,
      },

      logo: {
            width: 400,
            height: 400,
      },  

      tinyLogo: {
            width: 500,
            height: 500,
      },
      title: {
            color: '#05375a',
            fontSize: 30,
            fontWeight: 'bold'
      },
      text: {
            color: 'grey',
            marginTop:5
      },
      button: {
            alignItems: 'flex-end',
            marginTop: 30
      },
      signIn: {
            width: 150,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
            flexDirection: 'row'
      },
      textSign: {
            color: 'black',
            fontWeight: 'bold'
      }        
});
