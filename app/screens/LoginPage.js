import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {Text, Image, ImageBackground, StyleSheet, View } from "react-native";

function LoginPage(props) {
    return(
     <ImageBackground
        style= {styles.background}
        source= {require("../assets/bitcoin.png")}>
         <Image 
            style = {styles.logo} source = {require("../assets/seamzo.png")} />
         <View style = {styles.loginButton}>
             <Text style = {styles.textLogin} >
                 Login
             </Text>
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
    loginButton: {
        width: "30%",
        height: 40,
        backgroundColor: "seagreen",
        alignItems: "center",
        bottom: 50,
        justifyContent: "center",
        borderRadius: 25,
    },
    logo: {
        width: 500,
        height: 500,
        position: "absolute",
        top: 110,
    },
    textLogin:{
        fontWeight: 'bold',
        fontSize: 18,
        justifyContent: "center",
    }
});

export default LoginPage;