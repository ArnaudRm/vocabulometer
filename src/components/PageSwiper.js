import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet,} from 'react-native';
import {
    View,
    Text,
    Button,
    StyleProvider,
} from 'native-base';
import Swiper from 'react-native-deck-swiper';
import {connect} from 'react-redux';
import { sendWordsRead } from '../actions';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: -30,
    },
    card: {
        padding: 16,
        flex: 1,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "#E8E8E8",
        backgroundColor: "white"
    },
    text: {
        paddingVertical: 8,
        textAlign: 'left',
        fontSize: 15,
        backgroundColor: "transparent"
    },
    pageNumber: {
        alignSelf: 'flex-end',
    },
});

class PageSwiper extends Component {

    state = {
        cardIndex: 0
    };

    sendWordsRead(){
        const words = this.props.initialText.body.map(paragraph => {
            return paragraph.words.map(object => object.lemma).filter(word => word !== undefined)
        });

        const finalWordsArray = [];
        for(const wordArray of words ){
            finalWordsArray.push(...wordArray);
        }
        let arr = [];
        //console.log(finalWordsArray);
        arr.push(...finalWordsArray.filter((word,pos,self) => self.indexOf(word) == pos));
       // console.log(arr);
        this.props.sendWordsRead(this.props.token, arr);
    }

    onSwiped = (cardIndex,direction) => {
        this.setState({
            cardIndex : direction === 'left' ?  cardIndex +1 : cardIndex -1
        })
    };

    render() {
        const finalData = Array.from(this.props.data);
        finalData.push('Congrats, You finished the text! Swap to the right to get back to the text list');
        console.log(this.state.cardIndex);
        return (
            <View style={styles.container}>
                <Swiper
                    goBackToPreviousCardOnSwipeRight
                    disableRightSwipe={this.state.cardIndex === 0}
                    cards={finalData}
                    onSwipedLeft={ (cardIndex) => this.onSwiped(cardIndex, 'left')}
                    onSwipedRight={ (cardIndex) => this.onSwiped(cardIndex,'right')}
                    showSecondCard={false}
                    cardVerticalMargin={50}
                    renderCard={(card, index) => {
                        return (
                            <ScrollView contentContainerStyle={styles.card}>
                                <Text style={styles.text}>{card}</Text>
                                {
                                    index !== this.props.data.length
                                        ? <Text
                                            style={styles.pageNumber}>{`Page ${index + 1} / ${this.props.data.length}`}</Text>
                                        : null
                                }
                            </ScrollView>
                        )
                    }}
                    onSwipedAll={() => {
                        this.props.navigation.goBack();
                        this.sendWordsRead();
                    }}
                    backgroundColor={'transparent'}
                    stackSize={this.props.data.length}>
                </Swiper>
            </View>
        );
    }
}

const mapStateToProps = ({user}) => {
    const {token} = user;
    return {token};
};

export default connect(mapStateToProps, {sendWordsRead})(PageSwiper);
