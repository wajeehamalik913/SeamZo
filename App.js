import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';

import { render } from 'react-dom';
import { Dimensions,StyleSheet, Text, View, Image, SafeAreaView, Platform } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './app/components/BottomTabNavigator'
import AddScreen from './app/components/main/AddPost'
import Landing from './app/components/auth/LandingScreen'



const Stack = createStackNavigator();

export default function App (){
  
  return ( 

      <NavigationContainer >
          <Stack.Navigator initialRouteName="LandingScreen">
            <Stack.Screen name="LandingScreen" component={Landing} options={{ headerShown: false }} />
            <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
            
          </Stack.Navigator>
        </NavigationContainer>
    );
  }


