import React from 'react';
import {Provider} from 'react-redux';
import {BackHandler} from 'react-native';
import {store, persistor} from './src/store';
import {Font} from 'expo';
import AppNavigator from './src/navigation/AppNavigator';
import {reduxifyNavigator} from 'react-navigation-redux-helpers';
import {connect} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'

const robotoFont = require('native-base/Fonts/Roboto.ttf');
const robotoMediumFont = require('native-base/Fonts/Roboto_medium.ttf');
const ioniconsFont = require('native-base/Fonts/Ionicons.ttf');


const AppWithNav = reduxifyNavigator(AppNavigator, "root");
const mapStateToProps = (state) => ({
    state: state.nav,
});
const AppWithNavigationState = connect(mapStateToProps)(AppWithNav);

export default class App extends React.Component {
    state = {fontLoaded: false};

    async componentWillMount() {
        await Font.loadAsync({
            'Roboto': robotoFont,
            'Roboto_medium': robotoMediumFont,
            'Ionicons': ioniconsFont
        });
        this.setState({fontLoaded: true});
    }

    render() {
        if (this.state.fontLoaded) {
            return (
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <AppWithNavigationState/>
                    </PersistGate>
                </Provider>
            );
        }
        return null
    }
}
