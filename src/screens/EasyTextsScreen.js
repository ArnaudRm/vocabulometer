import React from 'react';
import {connect} from 'react-redux';
import {
    Container,
    Content,
} from 'native-base';
import {fetchTexts,resetTextState} from "../actions";
import TextList from '../components/TextList';
import AppSpinner from '../components/AppSpinner';
import BackHandlerWrapper from '../components/BackHandlerWrapper';

class EasyTextsScreen extends React.Component {

    componentWillMount() {
        this.props.fetchTexts(this.props.token, 'easy');
        this.props.resetTextState('easy');
    }

    renderContent() {

        if (this.props.easyTextsLoading) {
            return (
                <Container style={{alignItems: 'center', justifyContent: 'center'}}>
                    <AppSpinner/>
                </Container>
            );
        }
        return (
            <TextList
                texts={this.props.easyTexts}
                color="#20B449"
            />
        );
    }

    render() {
        return (
            <Container>
                <BackHandlerWrapper/>
                <Content>
                    {this.renderContent()}
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = ({text, user}) => {
    const {
        easyTexts,
        easyTextsLoading,
    } = text;
    const {token} = user;

    return {
        easyTexts,
        easyTextsLoading,
        token,
    }
};

const mapDispatchToProps = {
    fetchTexts,
    resetTextState,
};

export default connect(mapStateToProps, mapDispatchToProps)(EasyTextsScreen)
