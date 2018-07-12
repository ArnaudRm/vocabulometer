import React from 'react';
import {connect} from 'react-redux';
import {
    Container,
    Content,
} from 'native-base';
import {fetchTexts, resetTextState} from "../actions";
import TextList from '../components/TextList';
import AppSpinner from '../components/AppSpinner';
import BackHandlerWrapper from '../components/BackHandlerWrapper';

class RecommendedTextsScreen extends React.Component {

    componentWillMount() {
        this.props.fetchTexts(this.props.token, 'review');
        this.props.resetTextState('review');
    }

    renderContent() {
        if (this.props.recommendedTextsLoading) {
            return (
                <Container style={{alignItems: 'center', justifyContent: 'center'}}>
                    <AppSpinner/>
                </Container>
            );
        }
        return (
            <TextList
                texts={this.props.recommendedTexts}
                color="#FFD43A"
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
        recommendedTexts,
        recommendedTextsLoading,
    } = text;
    const {token} = user;

    return {
        recommendedTexts,
        recommendedTextsLoading,
        token,
    }
};

const mapDispatchToProps = {
    fetchTexts,
    resetTextState,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecommendedTextsScreen)
