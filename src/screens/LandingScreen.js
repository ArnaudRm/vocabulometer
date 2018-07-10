import React from 'react';
import {connect} from 'react-redux';
import {
    Spinner,
} from 'native-base';
import {logout} from "../actions";
import Base64 from '../helpers/atob';

class LandingScreen extends React.Component {

    state = {
        dataLoaded: false,
    };

    decodeToken = (token) => {
        return JSON.parse(Base64.atob(token.split('.')[1].replace('-', '+').replace('_', '/')));
    };

    isTokenValid = (token) => {
        console.log(token);
        const claims = this.decodeToken(token);
        const expDate = new Date(parseInt(claims.exp) * 1000);
        return expDate > new Date();
    };

    componentDidMount(){
        console.log(this.props);
        if(!this.props.token){
            this.props.navigation.navigate('Login');
        }else{
            //Check token expired
            const isValid = this.isTokenValid(this.props.token);
            //if token
            if(isValid){
                this.props.navigation.navigate('Main');
            }else{
                this.props.navigation.navigate('Login');
            }
        }
    }

    componentWillReceiveProps(nextProps){
        // Waiting for redux-persist to redydrate store
        console.log('ici');

        if(!this.props.token && nextProps.token){
            console.log('ici');

            const claims = this.decodeToken(nextProps.token);
            console.log(claims);
            const exp = new Date(claims.exp);
            console.log(exp);
            //Check token expired
            const isValid = this.isTokenValid(nextProps.token);
            //if token
            if(isValid){
                this.props.navigation.navigate('Main');
            }else{
                this.props.navigation.navigate('Login');
            }
        }else{
            console.log('la');

            this.props.navigation.navigate('Login');
        }

        this.setState({
            dataLoaded:true,
        });
    }

    render() {
        console.log(this.props);
        return <Spinner color="blue"/>
    }
}

const mapStateToProps = ({user}) => {
    const { token } = user;
    return { token };
};

export default connect(mapStateToProps)(LandingScreen)
