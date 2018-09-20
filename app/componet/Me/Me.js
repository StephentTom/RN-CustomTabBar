/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
   StyleSheet,
   Text,
   View
} from 'react-native';


export default class Me extends Component {
   render() {
      return (
          <View style={styles.container}>
             <Text style={styles.welcome}>
                Welcome to React Native!
             </Text>
             <Text style={styles.instructions}>
                To get started, edit App.js
             </Text>
          </View>
      );
   }

   componentDidMount() {
      this.props.navigation.setParams({
         isHiddenNavBar: true
      })
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
   },
   welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
   },
});
