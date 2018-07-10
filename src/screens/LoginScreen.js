import React from 'react';
import {
    Container,
    Content,
    Text,
    Button,
    Grid,
    Row,
    Spinner,
    StyleProvider
} from 'native-base';
import getTheme from '../../native-base-theme/components';
import platform from '../../native-base-theme/variables/platform';
import {
    StyleSheet,
    Keyboard,
    ImageBackground,
} from 'react-native';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import {renderInput} from '../helpers/formHelper';
import {login} from '../actions';

const styles = StyleSheet.create({
    fieldContainer: {
        marginVertical: 32
    },
    backgroundLogin: {
        width: '100%',
        height: '100%',
        flex: 1,
    },
    title: {
        fontSize: 36,
        color: '#ffffff',
        paddingHorizontal: 40
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
        console.log(username,password);
        this.props.login({username, password});
    };

    renderErrorMessage() {
        if (this.props.errorMessage) {
            return (
                <Content>
                    <Text style={styles.errorMessage}>{this.props.errorMessage}</Text>
                </Content>
            )
        }
        return null;
    }

    renderSpinner() {
        return (
            this.props.loginLoading
                ? <Spinner color="white"/>
                : null
        );
    }

    render() {
        return (
            <StyleProvider style={getTheme(platform)}>

                <Container>
                    <ImageBackground source={require('../../assets/background_login.jpg')}
                                     style={styles.backgroundLogin}>
                        <Grid>
                            <Row size={20} style={{alignItems: 'flex-end', justifyContent: 'center'}}>
                                {this.renderSpinner()}
                            </Row>

                            <Row size={80}>
                                <Content padder>
                                    <Content style={styles.fieldContainer}>
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
                                            disabled={this.props.loginLoading}
                                            onPress={this.props.handleSubmit(this.onSubmit)}
                                            style={styles.buttonSignIn}
                                        >
                                            <Text>SIGN IN</Text>
                                        </Button>
                                        {this.renderErrorMessage()}
                                    </Content>
                                </Content>
                            </Row>
                        </Grid>
                    </ImageBackground>
                </Container>
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
