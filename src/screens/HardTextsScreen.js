import React from 'react';
import {connect} from 'react-redux';
import {
    Container,
    Content,
} from 'native-base';
import {fetchTexts} from "../actions";
import TextList from '../components/TextList';

class HardTextsScreen extends React.Component {

    componentWillMount() {
        this.props.fetchTexts(this.props.token, 'hard');
    }

    renderContent() {
        if (!this.props.hardTextsLoading) {
            return (
                <TextList
                    texts={this.props.hardTexts}
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
};

export default connect(mapStateToProps, mapDispatchToProps)(HardTextsScreen)
