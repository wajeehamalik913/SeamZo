import React from "react";
import {Text, Image, ImageBackground, StyleSheet, View, Link, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const LoginPage = ({ navigation }) => {

    return(
        <SafeAreaView >
            
            <Image style={styles.logo_image} source = {require("../assets/coins.png")} />
            <Image style={styles.logo} source = {require("../assets/seamzo.png")} />
            <View style={styles.fixToText}>
                <Button
                title="Signup"
                color="#f194ff"
                onPress={() => navigation.navigate('SignupPage')}
                />
            </View>
        </SafeAreaView>

        
       
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
        height: 10,

        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        bottom: 100,
    },
    inputButton: {
        width: "70%",
        height: 40,
        backgroundColor: "white",
        justifyContent: "center",
        //alignItems: "center",
        borderRadius: 20,
        bottom: 300,
        marginVertical: 10,
        borderColor: "black",
        borderWidth: 3
    },
    logo: {
        width: 350,
        height: 350,
        
        alignItems: "center",
        bottom: 200,
    },
    logo_image: {
        justifyContent: 'center',
        width: 250,
        height: 200,
        alignItems: "center",
        bottom: 0,
    },
    textLogin:{
        fontWeight: 'bold',
       
        fontSize: 18,
        justifyContent: "center",
    },
    fixToText: {
        //flexDirection: 'column',
        marginHorizontal: 20,
        justifyContent: 'space-between',
        //alignItems: "center",
        bottom: 50,
    },
    container: {
    //display: "flex",
    flex:1,
    justifyContent: 'center',
    //marginHorizontal: 16,
    //flexDirection: "column",
    //justifyContent: "space-evenly",
    alignItems: "center",
    //height: "100%",
    textAlign: "center"
    },
    textInput:{
        fontWeight: 'bold',
        marginHorizontal: 20,
        fontSize: 18,
        
    }

});

export default LoginPage;