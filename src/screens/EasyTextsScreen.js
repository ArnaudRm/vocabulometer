import React from 'react';
import {connect} from 'react-redux';
import {
    Container,
    Content,
} from 'native-base';
import {fetchTexts} from "../actions";
import TextList from '../components/TextList';
import AppSpinner from '../components/AppSpinner';
import BackHandlerWrapper from '../components/BackHandlerWrapper';

class EasyTextsScreen extends React.Component {

    componentWillMount() {
        this.props.fetchTexts(this.props.token, 'easy');
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
};

export default connect(mapStateToProps, mapDispatchToProps)(EasyTextsScreen)
