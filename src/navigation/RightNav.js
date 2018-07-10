import React, {Component} from 'react';
import {connect} from "react-redux";
import {logout} from "../actions";
import {Button, Icon} from 'native-base';

class RightNav extends Component {

    render() {
        if (this.props.token) {
            return (
                <Button transparent onPress={() => this.props.logout(this.props.token)}>
                    <Icon name='log-out'/>
                </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(RightNav);