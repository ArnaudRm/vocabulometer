import React, {Component} from 'react';
import {fetchSingleText} from '../actions';
import {connect} from 'react-redux';
import {H1, Text} from 'native-base';
import {View, ScrollView,} from 'react-native';
import Circle from 'react-native-progress/Circle';
import platform from "../../native-base-theme/variables/platform";
import PageSwiper from '../components/PageSwiper';


const styles = {
    spinnerContainer: {
        justifyContent: 'center',
        flex: 1,
    },
    paragraph: {
        marginVertical: 8,
    }
};

class TextScreen extends Component {

    state = {
        textLength: 0,
    };

    componentDidMount() {
        const text = this.props.navigation.state.params;
        console.log(text._id);
        this.props.fetchSingleText(this.props.token, text.uri);
    }

    buildParagraph(item) {
        let string = '';
        const {interWords, words} = item;
        for (let i = 0; i < item.words.length; i++) {
            string += interWords[i];
            string += words[i].raw;
        }
        string += interWords[interWords.length - 1];

        return string;
    }

    buildText() {
        let paragraphs = [];
        for (const item of this.props.singleText.body) {
            const paragraph = this.buildParagraph(item);
            paragraphs.push(paragraph);
        }
        return paragraphs;
    }

    getTextLength() {
        let textLength = 0;
        for (const item of this.props.singleText.body) {
            const paragraph = this.buildParagraph(item);
            textLength += paragraph.length;
        }
        return textLength;
    }

    renderText(paragraphs) {
        const text = [];
        let i = 0;
        for (const p of paragraphs) {
            text.push(
                <Text style={styles.paragraph} key={i++}>{p}</Text>
            );
        }
        return text;
    }

    render() {
        if (this.props.singleTextLoading) {
            return (
                <View style={styles.spinnerContainer}>
                    <Circle size={30} indeterminate={true} color={platform.brandPrimary} style={{alignSelf: 'center'}}/>
                </View>
            )
        }

        const paragraphs = this.buildText();
        //Else we render a PageSwiper
        return (
            <PageSwiper
                navigation={this.props.navigation}
                data={paragraphs}
                textTitle={this.props.navigation.state.params.title}
            />
        );

    }
}

const mapStateToProps = ({text, user}) => {
    const {
        singleText,
        singleTextLoading,
    } = text;
    const {token} = user;

    return {
        singleText,
        singleTextLoading,
        token,
    };
};

const mapDispatchToProps = {
    fetchSingleText,
};

export default connect(mapStateToProps, mapDispatchToProps)(TextScreen);