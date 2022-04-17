// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import React, {Component} from 'react';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9Y7xSHtHUcHu0SVQbfXcQdaRhDIG_pZ0",
  authDomain: "seamzo-a79ef.firebaseapp.com",
  projectId: "seamzo-a79ef",
  storageBucket: "seamzo-a79ef.appspot.com",
  messagingSenderId: "371737779905",
  appId: "1:371737779905:web:b61b0ef62861b309dd3e40",
  measurementId: "G-5XPNLMRSYM"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.apps()
}

const auth = firebase.auth()

export { auth };
