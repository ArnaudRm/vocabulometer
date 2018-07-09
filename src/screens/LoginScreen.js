import React from 'react';
import {
    Container,
    Content,
    Text,
    Button,
} from 'native-base';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import {renderInput} from '../helpers/formHelper';
import {login} from '../actions';

class LoginScreen extends React.Component {

    onSubmit = ({username, password}) => {
        this.props.login({username, password});
    };

    renderErrorMessage() {
        if (this.props.errorMessage) {
            return (
                <Text>{this.props.errorMessage}</Text>
            )
        }
    }

    render() {
        return (
            <Container>
                <Content padder>
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
                    <Button
                        full
                        primary
                        rounded
                        onPress={this.props.handleSubmit(this.onSubmit)}
                    >
                        <Text>Connexion</Text>
                    </Button>
                    {this.renderErrorMessage()}
                </Content>
            </Container>
        );
    }
}


const validate = (formProps) => {

    const errors = {};
    console.log('Validate');

    if (!formProps.username) {
        errors.username = 'Faut un username';
    }

    if (!formProps.password) {
        errors.password = 'Faut un password';
    }

    console.log(errors);
    return errors;
};


LoginScreen = reduxForm({
    form: 'login',
    validate
})(LoginScreen);

const mapStateToProps = ({user}) => {
    const {errorMessage} = user;
    return {
        errorMessage
    };
};

export default connect(mapStateToProps, {login})(LoginScreen);
