import React, { Component } from 'react'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


import FeedScreen from './main/Feed'
import ProfileScreen from './main/ProfilePage'
import SearchScreen from './main/Search'


const EmptyScreen = () => {
    return (null)
}
const Tab = createMaterialBottomTabNavigator();

export class BottomTabNavigator extends Component {
      render() {
            return (
                  <Tab.Navigator initialRouteName="Feed" labeled={false}>
                        <Tab.Screen name="Feed" component={FeedScreen}
                              options={{
                                    tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons name="home" color={color} size={26} />
                                    ),
                              }} />
                        <Tab.Screen name="Search" component={SearchScreen} navigation={this.props.navigation}
                              options={{
                                    tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons name="magnify" color={color} size={26} />
                                    ),
                              }} />
                        <Tab.Screen name="AddContainer" component={EmptyScreen}
                              listeners={({ navigation }) => ({
                                    tabPress: event => {
                                    event.preventDefault();
                                    navigation.navigate("AddPost")
                                    }
                              })}
                              options={{
                                    tabBarIcon: ({ color, size }) => (
                              <MaterialCommunityIcons name="plus-box" color={color} size={26} />
                        ),
                    }} />
                        
                        <Tab.Screen name="Profile" component={ProfileScreen} 
                              options={{
                                    tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons name="account-circle" color={color} size={26} />
                                    ),
                              }} />
                  </Tab.Navigator>
            )
      }
}

export default BottomTabNavigator
