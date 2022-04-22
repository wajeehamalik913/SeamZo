
import { StyleSheet, Text, View } from 'react-native';
import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';
import UalRenderer from './Screens/UalRenderer';
import LandingScreen from './Screens/LandingScreen';
import BottomTabNavigator from './BottomTabNavigator';
import OnboardingScreen from './Screens/OnboardingScreen';
import {auth} from './firebase';
import AddPostScreen from './Screens/AddPostScreen';
import { useMemo } from 'react/cjs/react.production.min';
// import { useEffect } from 'react/cjs/react.production.min';


// const Stack = createNativeStackNavigator();

// const App=()=> {
//   const [userInfo, setUserInfo ] = useState(undefined)
//   // const [loaded, setLoaded ] = useState(false);
  
//   useEffect(() => {
//     const authUser = auth.onAuthStateChanged(user => setUserInfo(user))
//     return authUser
//   },[])
  
//   if (!userInfo) {
//     return (
//       <NavigationContainer>
//       <Stack.Navigator  headerMode="none">
//       {/* <Stack.Screen  name="Onboarding" component={OnboardingScreen} /> */}
      
//         <Stack.Screen  name="Login" component={LoginScreen} />
        
//         <Stack.Screen name="Anchor" component={UalRenderer}  />
//       </Stack.Navigator>
//     </NavigationContainer>
//     );
//   } else {
//     return(
//       <NavigationContainer >
//                 <Stack.Navigator initialRouteName="BottomTabNavigator">
//                   <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
//                   <Stack.Screen  name="AddPost" component={AddPostScreen} />
//                   <Stack.Screen name="Home" component={HomeScreen}  />
//                 </Stack.Navigator>
//       </NavigationContainer>
//       );
// }
// }
// export default App;


const Stack = createStackNavigator();

class App extends Component {
  
  constructor(props) {
    super()
    this.state = {
      loaded: false,
    }
  }
 componentDidMount() {
   //Checks if the user is already logged In and set the loggedIn variable
    auth.onAuthStateChanged((user) => {
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
    //If the screen is not loaded yet shows loading...
    if (!loaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' , alignItems: 'center'}}>
          <Text>Loading...</Text>
        </View>
      )
    }
    //If the user is not logged In it will render authentication screens
    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="LandingScreen">
            <Stack.Screen name="LandingScreen" component={LandingScreen} options={{ headerShown: false }} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />

          </Stack.Navigator>
        </NavigationContainer>
      );
    }
    //if the user is already logged In it will render this.
  return ( 
    
      <NavigationContainer >
          <Stack.Navigator initialRouteName="SeamZo">
            <Stack.Screen name="SeamZo" component={BottomTabNavigator}  />
            <Stack.Screen  name="AddPost" component={AddPostScreen}  options={{ headerShown: false }}/>
            <Stack.Screen name="Home" component={HomeScreen}  options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
       
    );
  }
}

export default App



