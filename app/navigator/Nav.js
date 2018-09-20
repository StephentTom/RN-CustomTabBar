/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
   Platform,
   StatusBar,
} from 'react-native';
import {
   createStackNavigator,
} from 'react-navigation';

import Tab from './Tab';
import { FriendDetail } from '../componet/Friend';
import { Login, Register } from '../componet/Login';
import { Publish } from '../componet/Publish';
// 自定义导航栏左右侧Item组件
import NavItem from '../common/NavItem';

const navigationOptions = ({navigation})=>{
   const options = {
      headerBackTitle: null,
      headerTintColor: '#fff', // 设置返回箭头/返回文字的颜色
      gesturesEnabled: true,
      headerTitleStyle: { textAlign: 'center', flex: 1, fontSize: 20, fontWeight: 'bold'},
      headerStyle: {
         // 如果想去掉安卓导航条底部阴影可以添加elevation: 0，
         // iOS下用shadowOpacity: 0。
         borderBottomWidth: 0,
         shadowOpacity: 0,
         elevation: 0,
         backgroundColor: '#ff2d55',
         paddingTop: Platform.OS === 'ios'? 0: StatusBar.currentHeight,
      }
   };

   if (navigation.state.routeName === 'Tab') {
      // 可以根据自定义传进来参数, 判断是否需要导航栏
      const routes = navigation.state.routes;
      const params = routes? navigation.state.routes[navigation.state.index].params : null;

      let _header = (params && params.isHiddenNavBar && null);

      return {
          ...options,
          header: _header
      };
   } else {
      return {
          ...options,
          // 自定义导航栏左侧返回组件
          headerLeft: <NavItem
              onPress={()=>navigation.state.params? navigation.dismiss() : navigation.goBack()}
          />
      }
   }
};

// modal, 使用dismiss(); push, 使用goBack();
const TabStack = createStackNavigator(
    {
       Tab,
       FriendDetail
    },

    {
       initialRouteName: 'Tab',
       mode: 'card',
       headerMode: 'screen',
       navigationOptions
    }
);
const LoginStack = createStackNavigator(
    {
       Login,
       Register,
    },

    {
       initialRouteName: 'Login',
       mode: 'card',
       headerMode: 'screen',
       navigationOptions
    }
);

export default Nav = createStackNavigator(
    {
       TabStack,
       LoginStack, // Stack标识着 有添加导航栏; 具有导航栏时, modal后 返回使用dismiss();
       Publish, // modal后无导航栏; 返回使用goBack()
    },

    {
       mode: 'modal',
       headerMode: 'none',
       navigationOptions: {
          gesturesEnabled: false,
       }
    }
);

