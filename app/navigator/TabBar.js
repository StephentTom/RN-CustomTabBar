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
   TouchableOpacity,
   SafeAreaView
} from 'react-native';


export default class TabBar extends Component {

   render() {
      const { navigation:{state: {routes}} } = this.props;

      return (
          <View style={styles.tabContainer}>
             {routes.map(this.renderItem)}
          </View>
      );
   }


   renderItem = (route, index)=>{
      const { navigation, jumpTo, activeTintColor, inactiveTintColor , renderIcon, getLabelText} = this.props;
      // state.index: 选中某个tabItem后, state.index角标值会改变; index: 每个tabItem都有对应一个角标值; 是否是焦点
      const focused = (index === navigation.state.index);
      // 根据状态设置 文字颜色
      const color = focused ? activeTintColor : inactiveTintColor;

// ??????
      // 不知道这里为什么要怎么做, 函数renderIcon(TabScene), getLabelText(TabScene)
      const TabScene = {
         focused,
         route,
         color,
      };

      if (index === 2) {
         return(
             <SafeAreaView key={route.key}>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={()=>navigation.navigate('Publish')}
                >
                   <View style={styles.tabItemStyle}>
                      {/*渲染item的图片. 不知道为什么这么写*/}
                      {renderIcon(TabScene)}
                   </View>
                </TouchableOpacity>
             </SafeAreaView>
         );
      } else {
         return (
             <SafeAreaView key={route.key}>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={()=>jumpTo(route.key)}
                >
                   <View style={styles.tabItemStyle}>
                      {/*渲染item的图片*/}
                      {renderIcon(TabScene)}

                      {/*item文字 */}
                      <Text style={{color, fontSize: 12, marginTop: 5}}>
                         {/*不知道为什么这么写, 但这函数会返回title*/}
                         {getLabelText(TabScene)}
                      </Text>

                      {/*<View style={styles.badgeStyle} />*/}

                   </View>
                </TouchableOpacity>
             </SafeAreaView>
         );
      }
   };
}

const styles = StyleSheet.create({
   tabContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: '#fff',
   },

   tabItemStyle: {
      height: 49,
      width: 49,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 5,
   },

   badgeStyle: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: 'red',

      position: 'absolute',
      right: 5,
      top: 5
   }
});
