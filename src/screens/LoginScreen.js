import React from 'react';
import {
    Container,
    Content,
    Text,
    Button,
    Grid,
    Row,
    Spinner,
    StyleProvider,
} from 'native-base';
import Circle from 'react-native-progress/Circle';
import getTheme from '../../native-base-theme/components';
import platform from '../../native-base-theme/variables/platform';
import {
    Platform,
    StyleSheet,
    Keyboard,
    ImageBackground,
    View,
    ScrollView,
    KeyboardAvoidingView,
} from 'react-native';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import {renderInput} from '../helpers/formHelper';
import {login} from '../actions';

const styles = StyleSheet.create({
    fieldContainer: {
        paddingVertical: 32,
        flex: 1,
    },
    backgroundLogin: {
        width: '100%',
        height: '100%',
        flex: 1,
    },
    title: {
        fontSize: Platform.OS === 'ios' ? 36 : 34,
        color: '#ffffff',
        paddingHorizontal: 40,
        paddingBottom: 32,
        textShadowColor:'#0d0d0d',
        textShadowOffset:{width: 2, height: 2},
        textShadowRadius:15,
    },
    errorMessage: {
        color: '#ffffff',
        fontSize: 20,
        marginTop: 16,
        textAlign: 'center',
        fontWeight: "500",
    },
    buttonSignIn: {
        marginTop: 16,
    },
});



class LoginScreen extends React.Component {

    onSubmit = ({username, password}) => {
        Keyboard.dismiss();
        this.props.login({username, password});
    };

    renderErrorMessage() {
        if (this.props.errorMessage && this.props.submitSucceeded) {
            return <Text style={styles.errorMessage}>{this.props.errorMessage}</Text>;
        }
        return null;
    }

    render() {

        console.log(platform);
        return (
            <StyleProvider style={getTheme(platform)}>

                <ImageBackground source={require('../../assets/background_login.jpg')}
                                 style={styles.backgroundLogin}>
                    <Content
                        padder
                        contentContainerStyle={{
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            paddingBottom: 64,
                        }}>
                        <KeyboardAvoidingView
                            enabled
                            keyboardVerticalOffset={Platform.ios ? 50 : 24 }
                            behavior="padding"

                        >

                            <Text style={styles.title}>TRAIN YOUR ENGLISH SKILLS</Text>
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
                            <Button
                                full
                                success
                                rounded
                                iconRight
                                disabled={this.props.loginLoading}
                                onPress={this.props.handleSubmit(this.onSubmit)}
                                style={styles.buttonSignIn}
                            >
                                <Text>SIGN IN</Text>
                                {
                                    this.props.loginLoading &&
                                    <Circle size={30} indeterminate={true} color={platform.brandLight}/>
                                }
                            </Button>
                            {this.renderErrorMessage()}
                        </KeyboardAvoidingView>

                    </Content>
                </ImageBackground>
            </StyleProvider>
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
