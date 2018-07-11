import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet,} from 'react-native';
import {
    View,
    Text,
    Button,
    StyleProvider,
} from 'native-base';
import Swiper from 'react-native-deck-swiper';
import { connect } from 'react-redux';

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
        fontSize: 14,
        backgroundColor: "transparent"
    },
    pageNumber: {
        alignSelf: 'flex-end',
    },
});

class DeckSwiperAdvancedExample extends Component {
    render() {
        const finalData = Array.from(this.props.data);
        finalData.push('Congrats, You finished the text! Swap this card to go back home');
        return (
            <View style={styles.container}>
                <Swiper
                    cards={finalData}
                    renderCard={(card, index) => {
                        return (
                            <ScrollView contentContainerStyle={styles.card}>
                                <Text style={styles.text}>{card}</Text>
                                {
                                    index !== this.props.data.length
                                        ? <Text style={styles.pageNumber}>{`Page ${index + 1} / ${this.props.data.length}`}</Text>
                                        : null
                                }
                            </ScrollView>
                        )
                    }}
                    onSwiped={(cardIndex) => {
                        console.log(cardIndex)
                    }}
                    onSwipedAll={() => {
                        this.props.navigation.goBack();
                        console.log('onSwipedAll')
                    }}
                    cardIndex={0}
                    backgroundColor={'transparent'}
                    stackSize={this.props.data.length}>
                </Swiper>
            </View>
        );
    }
}

const mapStateToProps = (state) =>{
    return {};
};

export default connect(mapStateToProps)(DeckSwiperAdvancedExample);
