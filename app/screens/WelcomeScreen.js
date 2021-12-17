import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {Text, Image, ImageBackground, StyleSheet, View, Button } from "react-native";

export default function WelcomeScreen({ navigation}) {
    return(
     <ImageBackground
        style= {styles.background}
        source= {require("../assets/greybackgro und.png")}
     >
         <Image style = {styles.logo} source = {require("../assets/seamzo.png")} />
         <View style = {styles.loginButton}>
            <Button
                title = "Register"
                onPress = {() => navigation.navigate("Register")} />
            <Button
                title = "Login"
                onPress = {() => navigation.navigate("Login")} />
         </View>
         

     </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    
    
    logo: {
        width: 200,
        height: 200,
        position: "absolute",
        top: 0,
    },
    textLogin:{
        fontWeight: 'bold',
       
        fontSize: 18,
        justifyContent: "center",
    },
    textInput:{
        fontWeight: 'bold',
        marginHorizontal: 20,
        fontSize: 18,
        
    }

});
