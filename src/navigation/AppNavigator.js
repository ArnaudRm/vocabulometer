import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen'
import EasyTextsScreen from '../screens/EasyTextsScreen';
import HardTextsScreen from '../screens/HardTextsScreen';
import RecommendedTextsScreen from '../screens/RecommendedTextsScreen';
import LandingScreen from '../screens/LandingScreen';
import LoginScreen from "../screens/LoginScreen";
import TextScreen from "../screens/TextScreen";
import {Image} from 'react-native';
import RightNav from './RightNav';

const logo = require('../../assets/icon.png');
const Logo = () => {
    return (
        <Image
            source={logo}
            style={{height: 30, width: 30}}
        />
    )
};



const HomeStackNavigator = createStackNavigator(
    {
        Main: {
            screen: HomeScreen,
            navigationOptions: {
                headerLeft: null
            }
        },

        EasyTexts: {
            screen: EasyTextsScreen,
        },

        HardTexts: {
            screen: HardTextsScreen,
        },

        RecommendedTexts: {
            screen: RecommendedTextsScreen,
        },

        Text: {
            screen: TextScreen,
        },

        Landing: {
            screen: LandingScreen,
        },

        Login: {
            screen: LoginScreen,
            navigationOptions: {
                header: null
            }
        }
    },

    //GLOBAL CONFIG FOR ALL SCREENS
    {
        initialRouteName: 'Landing',
        navigationOptions: {
            headerRight: <RightNav/>,
            headerTitle: <Logo/>, // Logo instead of header title
            headerStyle: {
                backgroundColor: '#FFF' // Header black BG color
            }
        }
    },
);
export default HomeStackNavigator;
