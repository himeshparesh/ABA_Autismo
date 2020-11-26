import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import VideoList from '../screens/Video';
import stripColorPicker from '../screens/Strip';
import Res from '../res';
import images from '../res/images';
import Animation from '../screens/Animation';

const BottomTabBar = createBottomTabNavigator(
  {
    VideoList: {
      screen: VideoList,
      navigationOptions: ({navigation}) => ({
        tabBarOptions: {
          showLabel: true,
          activeTintColor: Res.colors.Dark.placeHolderDarGreen,
        },
        tabBarLabel: 'Videos',
        tabBarIcon: ({focused}) => {
          return focused ? (
            <Image
              source={images.bottomTab.videoSelected}
              style={{height: 24, width: 24}}
            />
          ) : (
            <Image
              source={images.bottomTab.videoDisSelected}
              style={{height: 24, width: 24}}
            />
          );
        },
      }),
    },
    stripColorPicker: {
      screen: stripColorPicker,

      navigationOptions: {
        tabBarOptions: {
          showLabel: true,
          activeTintColor: Res.colors.Dark.placeHolderDarGreen,
        },
        tabBarLabel: 'ColorPicker',
        tabBarIcon: ({focused}) => {
          return focused ? (
            <Image
              source={images.bottomTab.colorSelected}
              style={{height: 24, width: 24}}
            />
          ) : (
            <Image
              source={images.bottomTab.colorDisSelected}
              style={{height: 24, width: 24}}
            />
          );
        },
      },
    },
    Animation: {
      screen: Animation,

      navigationOptions: {
        tabBarOptions: {
          showLabel: true,
          activeTintColor: Res.colors.Dark.placeHolderDarGreen,
        },
        tabBarLabel: 'Animation',
        tabBarIcon: ({focused}) => {
          return focused ? (
            <Image
              source={images.bottomTab.videoSelected}
              style={{height: 24, width: 24}}
            />
          ) : (
            <Image
              source={images.bottomTab.videoDisSelected}
              style={{height: 24, width: 24}}
            />
          );
        },
      },
    },
  },

  {
    initialRouteName: 'VideoList',
    index: '0',
    activeColor: Res.colors.Dark.placeHolderDarGreen,
    inactiveColor: Res.colors.Dark.secondaryText,
    barStyle: {backgroundColor: Res.colors.bgContainer},
    labeled: true,
  },
);

export default BottomTabBar;
