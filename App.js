import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import PropTypes from 'prop-types'

import { Anchor } from 'ual-anchor'
import { UALProvider, withUAL } from 'ual-reactjs-renderer'
const { Api, JsonRpc } = require('eosjs');
import { render } from 'react-dom';
import { Dimensions,StyleSheet, Text, View, Image, SafeAreaView, Platform } from 'react-native';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './app/redux/reducers'
import thunk from 'redux-thunk'
const store = createStore(rootReducer, applyMiddleware(thunk))

import firebase from "firebase/app"

const chains = [{
  

  chainId: "cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f",
  name: 'Local TestNet',
  rpcEndpoints: [{ protocol: "http", host: "localhost", port: "8888"}]

}]

const firebaseConfig = {
  apiKey: "AIzaSyBSS_0MwUXbsob-msOHPw_cyAnuqx90Nh4",
  authDomain: "seamzo.firebaseapp.com",
  projectId: "seamzo",
  storageBucket: "seamzo.appspot.com",
  messagingSenderId: "872280386420",
  appId: "1:872280386420:web:a1c8309b64c20139e95a21",
  measurementId: "G-6PHYXKJ099"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './app/components/BottomTabNavigator'
import Add from './app/components/main/AddPost'
import Upload from './app/components/main/Upload'
import Landing from './app/components/auth/LandingScreen'
import Login from './app/components/auth/LoginScreen'
import Signup from './app/components/auth/SignupScreen'

const Stack = createStackNavigator();

class TestApp extends Component {
  static propTypes = {
    ual: PropTypes.shape({
      activeUser: PropTypes.object,
      activeAuthenticator: PropTypes.object,
      logout: PropTypes.func,
      showModal: PropTypes.func,
    }).isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      chainId: props.chainId,
      message: '',
      loaded: false,
    }
  }
  
 componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
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
    if (!loaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text>Loading</Text>
        </View>
      )
    }

    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="LandingScreen">
            <Stack.Screen name="LandingScreen" component={Landing} options={{ headerShown: false }} />
            <Stack.Screen name="LoginScreen" component={Login} />
            <Stack.Screen name="SignupScreen" component={Signup} />
            
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
  return ( 
    <Provider store={store}>
      <NavigationContainer >
          <Stack.Navigator initialRouteName="BottomTabNavigator">
            <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
            <Stack.Screen name="AddPost" component = {Add} navigation={this.props.navigation} />
            <Stack.Screen name="Upload" component = {Upload} navigation= {this.props.navigation} />
            
          </Stack.Navigator>
        </NavigationContainer>
    </Provider>        
    );
  }
}
class UALWrapper extends Component {
  constructor(props) {
    super(props)
    const search = window.location.search
    const params = new URLSearchParams(search)
    const chainId = params.get('chain')
    this.state = {
      chainId: chainId || chains[0].chainId
    }
  }
  setChain = (event) => this.setState({ chainId: event.target.value })
  render () {
    const { chainId } = this.state
    const { available } = this.props
    const [ chain ] = available.filter((c) => c.chainId === chainId)
    if (!chain) {
      return (
        <div>Invalid Chain ID</div>
      )
    }
    const anchor = new Anchor([chain], {
      // Required: The name of the app requesting a session
      appName: 'ual-anchor-demo',
      // Optional: define your own endpoint or eosjs JsonRpc client
      // rpc: new JsonRpc('https://jungle.greymass.com'),
     rpc: new JsonRpc(`${ourNetwork.rpcEndpoints.protocol}://
   ${ourNetwork.rpcEndpoints.host}: ${ourNetwork.rpcEndpoints.port}`),
      // Optional: define API for session management, defaults to cb.anchor.link
      service: 'https://cb.anchor.link'
    })
    
    return (
      <div style={styles.container}>
        <p>
          <select
            defaultValue={chainId}
            onChange={this.setChain}
            style={styles.select}
          >
            {chains.map((chain) => (
              <option
                key={chain.chainId}
                value={chain.chainId}
              >
                {chain.name}
              </option>
            ))}
          </select>
        </p>
        <UALProvider
          appName='Anchor + Authenticator Test App'
          authenticators={[anchor]}
          chains={[chain]}
          key={chain.chainId}
        >
          <TestAppConsumer />
        </UALProvider>
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top',
    height: '100vh',
    marginTop: '10vh',
    flexDirection: 'column',
  },
  button: {
    padding: '10px 60px',
    backgroundColor: '#EA2E2E',
    textAlign: 'center',
    borderRadius: 5,
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: '2em',
  },
  select: {
    textAlign: 'center',
    borderRadius: 5,
    fontSize: 24,
    fontWeight: 'bold',
    width: '200px',
  },
  logout: {
    marginTop: 20,
  },
  baseText: {
    color: '#fff',
    fontSize: 18,
  },
  blueBG: {
    backgroundColor: '#447DD8',
  },
  announcementBar: {
    width: '100%',
    padding: '10px 50px 10px 20px',
    textAlign: 'center',
    backgroundColor: '#3de13d',
    top: 0,
    position: 'absolute',
    alignItems: 'center',
  },
}

const TestAppConsumer = withUAL(TestApp)

const App = () => (
  <UALWrapper available={chains} />
)

export default App


