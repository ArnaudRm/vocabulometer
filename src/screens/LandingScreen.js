import React from 'react';
import {connect} from 'react-redux';
import {
    Spinner,
} from 'native-base';
import {logout} from "../actions";

class LandingScreen extends React.Component {

    state = {
        dataLoaded: false,
    };

    decodeToken = (token) => {
        return JSON.parse(window.atob(token.split('.')[1].replace('-', '+').replace('_', '/')));
    };


    componentWillReceiveProps(nextProps){
        // Waiting for redux-persist to redydrate store
        if(!this.props.token && nextProps.token && !this.state.dataLoaded){
            this.setState({
                dataLoaded:true,
            });
            const claims = this.decodeToken(nextProps.token);
            console.log(claims);
            //Check token expired
            //if token
            this.props.navigation.navigate('Main');
            //else
            //this.props.navigation.navigate('Login');
        }else{
            this.props.navigation.navigate('Login');
        }
    }

    render() {
        return <Spinner/>
    }
}

const mapStateToProps = ({user}) => {
    const { token } = user;
    return { token };
};

export default connect(mapStateToProps)(LandingScreen)
