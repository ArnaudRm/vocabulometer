import React, {Component} from 'react';
import {connect} from "react-redux";
import { View } from 'react-native';
import {Button, Icon} from 'native-base';
import {logout} from "../actions";
import { withNavigation } from 'react-navigation';


class RightNav extends Component {

    render() {
        if (this.props.token) {
            return (
                <View style={{flexDirection: 'row'}}>
                    <Button transparent onPress={() => this.props.navigation.navigate('Contact')}>
                        <Icon type="Feather" name='info' style={{fontSize: 20}}/>
                    </Button>
                    <Button transparent onPress={() => this.props.logout(this.props.token)}>
                        <Icon name='log-out'/>
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