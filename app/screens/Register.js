import React, { Component } from 'react'
import { View, Button, TextInput} from 'react-native'
import { mongo } from 'mongoose';
import { Mongoose } from 'mongoose';
import { Db } from 'mongodb';

export class Register extends Component {
    constrcutor(props) {
        //super (props);
         this.state - {
             email: '',
             password: '',
             name: ''

         }

         this.onSignUp = this.onSignUp.bind(this)
    }

    onSignUp() {
        const { email, password, name } = this.state;
    
    }

    render() {
        return (
            <View>
                <TextInput
                    placeholder = "name"
                    onChangeText = {(name) => this.setState({ name})}
                />
                <TextInput
                    placeholder = "email"
                    onChangeText = {(email) => this.setState({ email})}
                />
                <TextInput
                    placeholder = "password"
                    secureTextEntry = {true}
                    onChangeText = {(password) => this.setState({ password})}
                />

                <Button
                    title = "Sign up"
                    onPress = {() => this.onSignUp()}
                />
            </View>
        )
    }
}

export default Register
