import React from 'react';
import { createStackNavigator} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen'
import OtherScreen from '../screens/OtherScreen';
import {Image} from 'react-native';
import { reduxifyNavigator } from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';

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
    },

    //GLOBAL CONFIG FOR ALL SCREENS
    {
        initialRouteName: 'Main',
        navigationOptions: {
            headerTitle: <Logo/>, // Logo instead of header title
            headerStyle: {
                backgroundColor: '#FFF' // Header black BG color
            }
        }
    },
);
export default HomeStackNavigator;