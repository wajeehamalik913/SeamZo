import React, { Component } from 'react'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'



import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import SearchScreen from './Screens/Search';


const EmptyScreen = () => {
    return (null)
}
const Tab = createMaterialBottomTabNavigator();

class BottomTabNavigator extends Component {


//       componentDidMount() {
//         this.props.clearData();
//         this.props.fetchUser();
//         this.props.fetchUserPosts();
//         this.props.fetchUserFollowing();
//     }


      render() {
            return (
                  // Bottom Tab Navigator for the Main Navigation of Social Media
                  <Tab.Navigator  initialRouteName="HomeScreen" labeled={false}>

                        {/*  Home Screen Navigation */}
                        <Tab.Screen name="HomeScreen" component={HomeScreen} navigation={this.props.navigation}
                              options={{
                                    tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons name="home" color={color} size={26} />
                                    ),
                              }} />


                        {/*  Search Screen Navigation */}
                        {/* <Tab.Screen name="Search" component={SearchScreen} navigation={this.props.navigation}
                              options={{
                                    tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons name="magnify" color={color} size={26} />
                                    ),
                              }} /> */}

                        {/*  Adding Pictures or Taking Pictures Navigation
                        It will Navigate to Camera  */}
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

                         {/*  Profile Page Navigation */}
                        <Tab.Screen name="ProfilePage" component={ProfileScreen} 
                        options={{ headerShown: false }}
                        
                        listeners={({ navigation }) => ({
                              tabPress: event => {
                                    event.preventDefault();
                                    navigation.navigate("ProfilePage")}
                              })}
                              options={{
                                    tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons name="account-circle" color={color} size={26} />
                                    ),
                              }} />
                  </Tab.Navigator>
            )
      }
}



// const mapStateToProps = (store) => ({
//     currentUser: store.userState.currentUser
// })

//const mapDispatchProps = (dispatch) => bindActionCreators({ fetchUser, fetchUserPosts, fetchUserFollowing, clearData }, dispatch);

export default BottomTabNavigator;