import React, {Component} from 'react';
import {connect} from "react-redux";
import {View,Platform} from 'react-native';
import {Button, Icon} from 'native-base';
import {logout} from "../actions";
import {withNavigation} from 'react-navigation';
class RightNav extends Component {

    render() {
        if (this.props.token) {
            return (
                <View style={{flexDirection: 'row'}}>
                    <Button
                        iconRight={Platform.OS === 'ios'} // RightIcon renders better on ios because no underlay onPress color on button
                        transparent
                        onPress={() => this.props.navigation.navigate('Contact')}
                    >
                        <Icon type="Feather" name='info' color="#6FB98F" style={{fontSize: 20}}/>
                    </Button>
                    <Button
                        iconRight={Platform.OS === 'ios'}
                        transparent
                        onPress={() => this.props.logout(this.props.token)}
                    >
                        <Icon type="Feather" name='log-out' style={{fontSize: 17}}/>
                    </Button>
                </View>
            );
        }
        return null;
    }
}

const mapStateToProps = ({user}) => {
    const {token} = user;
    return {token};
};

const mapDispatchToProps = {
    logout
};

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(RightNav));