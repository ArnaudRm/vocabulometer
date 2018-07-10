import React from 'react';
import {
    Container,
    Content,
    Text,
    Button,
    Grid,
    Row
} from 'native-base';
import { StyleSheet, ImageBackground } from 'react-native';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import {renderInput} from '../helpers/formHelper';
import {login} from '../actions';
import AppSpinner from '../components/AppSpinner';

const styles = StyleSheet.create({
    fieldContainer: {
        marginVertical: 32
    },
    backgroundLogin: {
        width: '100%',
        height: '100%',
        flex: 1,
    },
    buttonSignIn: {
        backgroundColor: '#6fb98f'
    },
    title: {
        fontSize: 36,
        color: '#ffffff',
        paddingHorizontal: 40
    }
});


class LoginScreen extends React.Component {

    onSubmit = ({username, password}) => {
        this.props.login({username, password});
    };

    renderErrorMessage() {
        if (this.props.errorMessage) {
            return (
                <Content>
                    <Text>{this.props.errorMessage}</Text>
                </Content>
            )
        }
        return null;
    }

    renderButtonOrSpinner() {

        return (
            <Content>
                <Button
                    full
                    primary
                    rounded
                    disabled={this.props.loginLoading}
                    onPress={this.props.handleSubmit(this.onSubmit)}
                    style={styles.buttonSignIn}
                >
                    <Text>SIGN IN</Text>
                </Button>
                {
                    this.props.loginLoading
                        ? <AppSpinner/>
                        : null
                }
            </Content>
        )
    }

    render() {
        return (
            <Container>
            <ImageBackground source={require('../../assets/background_login.jpg')} style={styles.backgroundLogin}>
            <Grid>
            <Row size={1}></Row>
            <Row size={2}>

                <Content padder>
                    <Text style={styles.title}>TRAIN YOUR ENGLISH SKILLS</Text>
                    <Content style={styles.fieldContainer}>
                        <Field
                            component={renderInput}
                            label="Username"
                            floatingLabel
                            name="username"
                        />
                        <Field
                            component={renderInput}
                            label="Password"
                            secureTextEntry
                            floatingLabel
                            name="password"
                        />
                    </Content>
                    {this.renderButtonOrSpinner()}
                    {this.renderErrorMessage()}

                </Content>
                </Row>
                </Grid>
                </ImageBackground>
            </Container>
        );
    }
}


const validate = (formProps) => {

    const errors = {};

    if (!formProps.username) {
        errors.username = 'Required username';
    }

    if (!formProps.password) {
        errors.password = 'Required password';
    }

    return errors;
};

LoginScreen = reduxForm({
    form: 'login',
    validate
})(LoginScreen);

const mapStateToProps = ({user}) => {
    const {
        errorMessage,
        loginLoading,
    } = user;

    return {
        errorMessage,
        loginLoading,
    };
};

export default connect(mapStateToProps, {login})(LoginScreen);
