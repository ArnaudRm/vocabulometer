import React from 'react';
import {
    Container,
    Content,
    Text,
    Button,
} from 'native-base';
import { StyleSheet } from 'react-native';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import {renderInput} from '../helpers/formHelper';
import {login} from '../actions';
import AppSpinner from '../components/AppSpinner';

const styles = StyleSheet.create({
    fieldContainer: {
        marginVertical: 32
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
                >
                    <Text>Connexion</Text>
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
            <Container >
                <Content padder>
                    <Content style={styles.fieldContainer}>
                        <Field
                            component={renderInput}
                            label="Nom d'utilisateur"
                            floatingLabel
                            name="username"
                        />
                        <Field
                            component={renderInput}
                            label="Mot de passe"
                            secureTextEntry
                            floatingLabel
                            name="password"
                        />
                    </Content>
                    {this.renderButtonOrSpinner()}
                    {this.renderErrorMessage()}
                </Content>
            </Container>
        );
    }
}


const validate = (formProps) => {

    const errors = {};

    if (!formProps.username) {
        errors.username = 'Nom d\'utilisateur obligatoire';
    }

    if (!formProps.password) {
        errors.password = 'Mot de passe obligatoire';
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
