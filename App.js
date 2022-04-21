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
  apiKey: "AIzaSyDL6KQdNm_W3oKZLI3HoohrKB01Pv5UqL0",
  authDomain: "seamzo-ee0cf.firebaseapp.com",
  projectId: "seamzo-ee0cf",
  storageBucket: "seamzo-ee0cf.appspot.com",
  messagingSenderId: "350428953332",
  appId: "1:350428953332:web:62f6002ab41a185ec07ca1",
  measurementId: "G-2YNBH8RNF4"
};


if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './app/components/BottomTabNavigator'
import Add from './app/components/main/AddPost'
import Upload from './app/components/main/Upload'
import LandingScreen from './app/components/auth/LandingScreen'
import LoginScreen from './app/components/auth/LoginScreen'
import SignupScreen from './app/components/auth/SignupScreen'

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
            <Stack.Screen name="LandingScreen" component={LandingScreen} options={{ headerShown: false }} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="SignupScreen" component={SignupScreen} />
            
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
  return ( 
    <Provider store={store}>
      <NavigationContainer >
          <Stack.Navigator initialRouteName="BottomTabNavigator">
            <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
            <Stack.Screen name="AddPost" component = {Add} navigation={this.props.navigation} />
            <Stack.Screen name="Upload" component = {Upload} navigation= {this.props.navigation} />
            
          </Stack.Navigator>
        </NavigationContainer>
    </Provider>        
    );
  }
}

export default App


