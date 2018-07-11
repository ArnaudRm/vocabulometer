import React from 'react';
import {connect} from 'react-redux';
import {
    Container,
    Content,
} from 'native-base';
import {fetchTexts} from "../actions";
import TextList from '../components/TextList';

class RecommendedTextsScreen extends React.Component {

    componentWillMount() {
        this.props.fetchTexts(this.props.token, 'review');
    }

    renderContent() {
        if (!this.props.recommendedTextsLoading) {
            return (
                <TextList
                    texts={this.props.recommendedTexts}
                />
            );
        }
    }

    render() {
        return (
            <Container>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(RecommendedTextsScreen)
