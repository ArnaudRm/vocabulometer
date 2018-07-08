import React from 'react';
import { connect } from 'react-redux';
import {
    Text,
    Container,
    Content,
    Spinner,
} from 'native-base';
import { fetchTexts } from "../actions";
import TextList from '../components/TextList';

const fakeTexts = [
    {
        title: 'Super text',
        image: 'https://images.ctfassets.net/o59xlnp87tr5/nywabPmH5Y6W4geG8IYuk/0a59905671f8d637350df8e7ec9e7fb9/backgrounds-min.jpg?w=360&h=240&fit=fill',
        text: 'Abzadaz Abzadaz Abzadaz Abzadaz Abzadaz Abzadaz '
    },

    {
        title: 'Super text 2',
        image: 'https://cdn.pixabay.com/photo/2013/04/06/11/50/image-editing-101040_960_720.jpg',
        text: 'Abzadaz Abzadaz Abzadaz Abzadaz Abzadaz Abzadaz '
    },
    {
        title: 'Super text 3',
        image: 'https://g.acdn.no/obscura/API/dynamic/r1/pp/tr_1080_723_l_f/0000/polopoly_fs/1.8124966!/image/635214877.jpg?chk=E72EC0',
        text: 'Abzadaz Abzadaz Abzadaz Abzadaz Abzadaz Abzadaz '
    },
];

class OtherScreen extends React.Component {

    componentWillMount(){
        this.props.fetchTexts();
    }

    renderContent(){
        if(this.props.textsLoading){
            return <Spinner color={"#CECECE"}/>
        }

        return (
            <Container>
                <Content padder>
                    <TextList
                        texts={fakeTexts}
                        // texts={this.props.texts}
                    />
                </Content>
            </Container>
        );
    }

    render() {
        return this.renderContent();
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
