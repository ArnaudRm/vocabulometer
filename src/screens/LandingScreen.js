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


    componentDidMount(){
        if(this.props.token === null ){
            this.props.navigation.navigate('Login');
        }
    }

    componentWillReceiveProps(nextProps){
        // Waiting for redux-persist to redydrate store
        console.log('ici');

        if(!this.props.token && nextProps.token){
            console.log('ici');

            const claims = this.decodeToken(nextProps.token);
            console.log(claims);
            //Check token expired
            //if token
            this.props.navigation.navigate('Main');
            //else
            //this.props.navigation.navigate('Login');
        }else{
            console.log('la');

            this.props.navigation.navigate('Login');
        }

        this.setState({
            dataLoaded:true,
        });
    }

    render() {
        return <Spinner color="blue"/>
    }
}

const mapStateToProps = ({user}) => {
    const { token } = user;
    return { token };
};

export default connect(mapStateToProps)(LandingScreen)
