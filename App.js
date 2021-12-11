import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';

import { render } from 'react-dom';
import { Dimensions,StyleSheet, Text, View, Image, SafeAreaView, Platform } from 'react-native';

import LoginPage from './app/screens/LoginPage';
import WelcomeScreen from './app/screens/WelcomeScreen';
import RegisterScreen from './app/screens/Register';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';






const Stack = createStackNavigator();

export default function App (){

  return ( 

      <NavigationContainer>
        <Stack.Navigator initialRouteName = "Landing">
          <Stack.Screen name = "Landing" component = {WelcomeScreen} options = {{headerShown: false}}/>
          <Stack.Screen name = "Landing" component = {WelcomeScreen} options = {{headerShown: false}}/>
          <Stack.Screen name = "Register" component = {RegisterScreen} options = {{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }


