import React, {useState, createRef} from 'react';
import { StyleSheet, Button, TextInput, View, Text, ScrollView, Image, Keyboard, TouchableOpacity, KeyboardAvoidingView} from 'react-native';

import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';



function LandingScreen  ({navigation}){
      const { colors } = useTheme();
      return (
    
      <View style={styles.body}>
            <View style = {styles.header}>
                  <Animatable.Image 
                        animation="bounceIn"
                        duraton="2000"
                  source = {require ("../assets/seamzo.png")}
                  style = {styles.logo}
                  resizeMode = 'stretch'
                  />
            </View>
                  <Animatable.View 
                        style={[styles.footer, {
                        backgroundColor: '#DEDFE0'
                        }]}
                        animation="fadeInUpBig"
            >
                        <Text style={[styles.title, {color: 'black'}]}>NFT Social Media Platform!</Text>
                        <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={()=>navigation.navigate('LoginScreen')} style={styles.button1}>
                        <Text style={styles.buttonText}>Lets Go!!</Text>
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
            backgroundColor: '#f8f8f8',
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
            width: 360,
            height: 400,
            // paddingVertical: 50,
            // alignItems: 'center',
            // translateX:200,
            // translateY:20,
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
            alignItems: 'flex-start',
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
      buttonContainer: {
            width: '100%',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            marginTop: 40,
        
          },
          button1: {
           
            width: '100%',
            padding: 15,
            borderRadius: 10,
            alignItems: 'flex-end',
          },
         
          buttonText: {
            color: '#59595A',
            fontWeight: '700',
            fontSize: 20,
          }       
});
