import React from 'react';
import { createStackNavigator} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen'
import OtherScreen from '../screens/OtherScreen';
import LandingScreen from '../screens/LandingScreen';
import LoginScreen from "../screens/LoginScreen";
import {Image} from 'react-native';

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

        Other: {
            screen: OtherScreen,
        },

        Landing: {
            screen: LandingScreen,
        },

        Login: {
            screen: LoginScreen,
            navigationOptions: {
                headerLeft: null
            }
        }
    },

    //GLOBAL CONFIG FOR ALL SCREENS
    {
        initialRouteName: 'Landing',
        navigationOptions: {
            headerTitle: <Logo/>, // Logo instead of header title
            headerStyle: {
                backgroundColor: '#FFF' // Header black BG color
            }
        }
    },
);
export default HomeStackNavigator;