import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './component/common';
import { LoginForm } from './component/LoginForm.js';

class App extends Component {

state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDRRsylbKHZV88BrqzXGOQJTAHUw_OD_cg',
    authDomain: 'authentication-9889e.firebaseapp.com',
    databaseURL: 'https://authentication-9889e.firebaseio.com',
    projectId: 'authentication-9889e',
    storageBucket: 'authentication-9889e.appspot.com',
    messagingSenderId: '107518852207'
    });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
      return (
        <CardSection>
        <Button whenPress={() => firebase.auth().signOut()}>
        Log out
       </Button>
       </CardSection>
     );
      case false:
      return (<LoginForm />);

      default:
       return (<View style={{ marginTop: 50 }}>
         <Spinner /> </View>);


  }
}


render() {
  return (
    <View>
      <Header headerText={'Authintcation'} />
      {this.renderContent()}
            </View>
  );
}


}

export default App;
