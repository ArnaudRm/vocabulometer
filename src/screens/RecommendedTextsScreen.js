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
                <Container>
                    <Content padder>
                        <TextList
                            navigation={this.props.navigation}
                            texts={this.props.recommendedTexts}
                        />
                    </Content>
                </Container>
            );
        }
    }

    render() {
        return (
            <Container>
                <Content padder>
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
