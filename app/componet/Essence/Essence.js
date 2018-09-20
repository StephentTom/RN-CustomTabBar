/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
   StyleSheet,
   Text,
   View,
   TouchableOpacity
} from 'react-native';


export default class Essence extends Component {

   _onPress = () =>{
      this.props.navigation.navigate('FriendDetail');
   };

   render() {
      return (
          <View style={styles.container}>
             <TouchableOpacity
                 onPress={this._onPress}
             >
                <Text style={styles.welcome}>
                   Welcome to React Native -- Essence!
                </Text>
             </TouchableOpacity>

             <Text style={styles.instructions}>
                To get started, edit App.js
             </Text>
          </View>
      );
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
