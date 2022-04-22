import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation}) => {
    var yourPicture = require('../assets/onboarding-img2.png');
  return (
    <Onboarding
    // SkipButtonComponent={Skip}
    // NextButtonComponent={Next}
    // DoneButtonComponent={Done}
    // DotComponent={Dots}
    onSkip={() => navigation.replace("Login")}
    onDone={() => navigation.navigate("Login")}
    pages={[
      {
        backgroundColor: '#a6e4d0',
        image:  <image  style = {{ height: 50, width: 50 }} source={yourPicture}/> ,
        title: 'Connect to the World',
        subtitle: 'A New Way To Connect With The World',
      },
      {
        backgroundColor: '#fdeb93',
        image: <Image source={require('../assets/onboarding-img2.png')} />,
        title: 'Share Your Favorites',
        subtitle: 'Share Your Thoughts With Similar Kind of People',
      },
      {
        backgroundColor: '#e9bcbe',
        image: <Image source={require('../assets/onboarding-img3.png')} />,
        title: 'Become The Star',
        subtitle: "Let The Spot Light Capture You",
      },
    ]}
  />
    
  )
}

export default OnboardingScreen
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    },
  });