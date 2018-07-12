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

class HardTextsScreen extends React.Component {

    componentWillMount() {
        this.props.fetchTexts(this.props.token, 'hard');
        this.props.resetTextState('hard');
    }

    renderContent() {
        if (this.props.hardTextsLoading) {
            return (
                <Container style={{alignItems: 'center', justifyContent: 'center'}}>
                    <AppSpinner/>
                </Container>
            );
        }
        return (
            <TextList
                texts={this.props.hardTexts}
                color="#FF473A"
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
        hardTexts,
        hardTextsLoading,
    } = text;
    const {token} = user;

    return {
        hardTexts,
        hardTextsLoading,
        token,
    }
};

const mapDispatchToProps = {
    fetchTexts,
    resetTextState,
};

export default connect(mapStateToProps, mapDispatchToProps)(HardTextsScreen)
