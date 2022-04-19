import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import reactfrom  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';
import UalRenderer from './Screens/UalRenderer';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen options={{headerBackVisible:true}} name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen}  />
      <Stack.Screen name="Anchor" component={UalRenderer}  />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
