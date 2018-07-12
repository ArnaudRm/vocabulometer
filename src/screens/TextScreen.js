import React, {Component} from 'react';
import {fetchSingleText} from '../actions';
import {connect} from 'react-redux';
import {View} from 'react-native';
import Circle from 'react-native-progress/Circle';
import platform from '../../native-base-theme/variables/platform';
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
        const maxParagraphLength = 750;
        for (const item of this.props.singleText.body) {
            const paragraph = this.buildParagraph(item);

            if (paragraph.length > maxParagraphLength) {
                let splittedParagraph = paragraph;
                let charactersRemaining = paragraph.length;
                while (charactersRemaining > maxParagraphLength) {

                    if (splittedParagraph[maxParagraphLength] !== ' ' || splittedParagraph[maxParagraphLength] !== '.') {
                        let isNextCharacterBlankOrDot = false;
                        let i = maxParagraphLength + 1;
                        while (!isNextCharacterBlankOrDot) {
                            if (splittedParagraph[i] === ' ' || splittedParagraph[i] === '.') {
                                paragraphs.push(splittedParagraph.substr(0, i + 1));
                                splittedParagraph = splittedParagraph.slice(i + 1);
                                charactersRemaining -= i + 1;
                                isNextCharacterBlankOrDot = true;
                                break;
                            }
                            i++;
                        }
                    } else {
                        paragraphs.push(splittedParagraph.substr(0, 700));
                        splittedParagraph = splittedParagraph.slice(700);
                        charactersRemaining -= 700;
                    }
                }
                paragraphs.push(splittedParagraph);
            } else {
                paragraphs.push(paragraph);
            }
        }
        return paragraphs;
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
        return (
                <PageSwiper
                    initialText={this.props.singleText}
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