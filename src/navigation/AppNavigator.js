import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen'
import EasyTextsScreen from '../screens/EasyTextsScreen';
import HardTextsScreen from '../screens/HardTextsScreen';
import RecommendedTextsScreen from '../screens/RecommendedTextsScreen';
import LandingScreen from '../screens/LandingScreen';
import LoginScreen from "../screens/LoginScreen";
import TextScreen from "../screens/TextScreen";
import {Image,Platform,Dimensions,View} from 'react-native';
import RightNav from './RightNav';
import ContactScreen from "../screens/ContactScreen";
import VideoScreen from "../screens/VideoScreen";
import StatsScreen from "../screens/StatsScreen";

const logo = require('../../assets/icon.png');
const Logo = () => {
    const { width } = Dimensions.get('window');
    return (
        <Image
            source={logo}
            resizeMode="contain"
            style={{
                //marginLeft: Platform.OS === 'ios' ? 0 : width/2 - 45,s
                height: 30,
                width: 30,
            }}
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

        Video: {
            screen: VideoScreen,
        },

        Landing: {
            screen: LandingScreen,
        },

        Login: {
            screen: LoginScreen,
            navigationOptions: {
                header: null
            }
        },

        Stats: {
            screen: StatsScreen,
        },

        Contact: {
            screen: ContactScreen,
        },
    },

    //GLOBAL CONFIG FOR ALL SCREENS
    {
        initialRouteName: 'Landing',
        navigationOptions: {
            headerRight: <RightNav/>,
            headerTitle:  <Logo/> , // Logo instead of header title
            headerStyle: {

                backgroundColor: '#FFF' // Header black BG color
            }
        }
    },
);
export default HomeStackNavigator;
