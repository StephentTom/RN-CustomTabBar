/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
   StyleSheet,
   Image,
   ViewPropTypes,
   TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';


export default class NavItem extends Component {

   static propTypes = {
      style: ViewPropTypes.style,
      source: PropTypes.object,
      onPress: PropTypes.func,
   };

   static defaultProps = {
      style: {
         width: 44,
         height: 44,
         justifyContent: 'center',
         alignItems: 'center'
      },
      source: {uri: 'nav_back_1'},
      onPress: null
   };

   _onPress = ()=>{
      const {onPress} = this.props;
      onPress && onPress();
   };

   render() {
      const {style, source} = this.props;

      return (
          <TouchableOpacity
              activeOpacity={0.85}
              style={style}
              onPress={this._onPress}
          >
             <Image
                 style={styles.imageStyle}
                 source={source}
                 resizeMode={'contain'}
             />

          </TouchableOpacity>
      );
   }
}

const styles = StyleSheet.create({

   imageStyle: {
      width: 20,
      height: 20
   }
});
