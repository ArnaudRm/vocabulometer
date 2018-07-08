import React from 'react';
import { connect } from 'react-redux';
import {
    Text,
    Container,
    Content,
} from 'native-base';
import { fetchTexts} from "../actions";


class OtherScreen extends React.Component {

    componentWillMount(){
        this.props.fetchTexts();
    }

    render() {
        return (
            <Container>
                <Content padder>
                    <Text>OTHER PAGE</Text>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = ({ text }) => {
  const {
      texts,
      textsLoading,
  } = text;
  return {
      texts,
      textsLoading,
  }
};

const mapDispatchToProps = {
  fetchTexts,
};

export default connect(mapStateToProps, mapDispatchToProps)(OtherScreen)
