import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';

import { render } from 'react-dom';
import { Dimensions,StyleSheet, Text, View, Image, SafeAreaView, Platform } from 'react-native';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './app/redux/reducers'
import thunk from 'redux-thunk'
const store = createStore(rootReducer, applyMiddleware(thunk))

import firebase from "firebase/app"


const firebaseConfig = {
  apiKey: "AIzaSyBSS_0MwUXbsob-msOHPw_cyAnuqx90Nh4",
  authDomain: "seamzo.firebaseapp.com",
  projectId: "seamzo",
  storageBucket: "seamzo.appspot.com",
  messagingSenderId: "872280386420",
  appId: "1:872280386420:web:a1c8309b64c20139e95a21",
  measurementId: "G-6PHYXKJ099"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './app/components/BottomTabNavigator'
import Add from './app/components/main/AddPost'
import Upload from './app/components/main/Upload'
import Landing from './app/components/auth/LandingScreen'
import Login from './app/components/auth/LoginScreen'
import Signup from './app/components/auth/SignupScreen'
import UalRenderer from './app/components/auth/UalRenderer'

const Stack = createStackNavigator();

class App extends Component {
  
  constructor(props) {
    super()
    this.state = {
      loaded: false,
    }
  }
 componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }
    })
  }
render() {
    const { loggedIn, loaded } = this.state;
    if (!loaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text>Loading</Text>
        </View>
      )
    }

    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="LandingScreen">
            <Stack.Screen name="LandingScreen" component={Landing} options={{ headerShown: false }} />
            <Stack.Screen name="LoginScreen" component={Login} />
            <Stack.Screen name="SignupScreen" component={Signup} />
            <Stack.Screen name="UalRenderer" component={UalRenderer} />
            
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
  return ( 
    <Provider store={store}>
      <NavigationContainer >
          <Stack.Navigator initialRouteName="BottomTabNavigator">
            <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
            <Stack.Screen name="UalRenderer" component = {UalRenderer} navigation={this.props.navigation} />
            <Stack.Screen name="AddPost" component = {Add} navigation={this.props.navigation} />
            <Stack.Screen name="Upload" component = {Upload} navigation= {this.props.navigation} />
            
          </Stack.Navigator>
        </NavigationContainer>
    </Provider>        
    );
  }
}

export default App


