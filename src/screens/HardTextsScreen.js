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
                <Container>
                    <Content padder>
                        <TextList
                            // texts={fakeTexts}
                            texts={this.props.hardTexts}
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
        hardTexts,
        hardTextsLoading,
    } = text;
    const { token } = user;

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