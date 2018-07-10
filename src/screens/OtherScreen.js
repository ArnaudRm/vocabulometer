import React from 'react';
import {connect} from 'react-redux';
import {
    Container,
    Content,
} from 'native-base';
import {fetchTexts} from "../actions";
import TextList from '../components/TextList';
import AppSpinner from "../components/AppSpinner";

class OtherScreen extends React.Component {

    componentWillMount() {
        this.props.fetchTexts(this.props.token);
    }

    renderContent() {

        return (
            <Container>
                <Content padder>
                    <TextList
                       // texts={fakeTexts}
                        texts={this.props.texts}
                    />
                </Content>
            </Container>
        );
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
        texts,
        textsLoading,
    } = text;
    const { token } = user;

    return {
        texts,
        textsLoading,
        token,
    }
};

const mapDispatchToProps = {
    fetchTexts,
};

export default connect(mapStateToProps, mapDispatchToProps)(OtherScreen)
