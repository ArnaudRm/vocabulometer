import React from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import BarChart from '../components/BarChart';
import {Container, Content, H1, Grid, Col, List, ListItem, Card, CardItem} from 'native-base';
import {fetchUserStats, fetchVideos} from "../actions";
import {connect} from "react-redux";
import BackHandlerWrapper from '../components/BackHandlerWrapper';

class StatsScreen extends React.Component {

    buildDates(arr) {
        console.log('base arr 0 ',arr);

        const dates = [];
        const data = [];
        let final = [0, 0];

        if (arr.days.length > 0) {
            const maxDate = arr.days.reduce((acc, current) => {
                if (new Date(current._id) > new Date(acc._id))
                    return current;
                else
                    return acc;
            });

            arr = arr.days
            console.log('base arr 1',arr);

            const minDate = new Date(maxDate._id) - 24 * 3600 * 1000 * 7;
            arr.sort((a, b) => new Date(a) - new Date(b));
            for (let i = 0; i <= 7; i++) {
                dates[i] = new Date(minDate + 24 * 3600 * 1000 * i);

                console.log(dates[i]);
                data[i] = arr.find((val) => new Date(val._id).getTime() === dates[i].getTime() ) || {count: 0};
            }
            final = data.map((v) => v.count);
        } else {
            for (let i = 6; i >= 0; i--) {
                const timestampDate = new Date() - (24 * 3600 * 1000 * i);
                dates[i] = new Date(timestampDate);
            }
        }

        return {
            dates,
            final,
        };
    }

    render() {
        const {wordsRead, newWordsRead, newRecentWordsRead} = this.props.user;

        const wordsReadDates = this.buildDates(wordsRead).dates;
        const wordsReadData = this.buildDates(wordsRead).final;

        const newWordsReadDates = this.buildDates(newWordsRead).dates;
        const newWordsReadData = this.buildDates(newWordsRead).final;

        return (
            <ScrollView style={{padding: 10}}>
                <View style={styles.barContainer}>
                    <H1 style={{paddingHorizontal: 8, paddingBottom: 8}}>Words read</H1>
                    <BarChart dates={wordsReadDates} data={wordsReadData}/>
                </View>
                <View style={styles.barContainer}>
                    <H1 style={{paddingHorizontal: 8, paddingBottom: 8}}>New words read</H1>
                    <BarChart dates={newWordsReadDates} data={newWordsReadData}/>
                </View>

                <View style={styles.barContainer}>
                    {
                        newRecentWordsRead.words.length > 0
                            ? <H1 style={{paddingHorizontal: 8, paddingBottom: 8}}>New recents words read</H1>
                            : null
                    }
                    <List>build
                        {
                            newRecentWordsRead.words.slice(0, 12).map((item, index) => {
                                return (
                                    <ListItem noIndent style={{backgroundColor: 'white'}} key={index}>
                                        <Text>
                                            {item._id}
                                        </Text>
                                    </ListItem>
                                )
                            })
                        }
                    </List>

                </View>
                <BackHandlerWrapper/>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    barContainer: {
        marginVertical: 16,
    }
});


const mapStateToProps = (state) => {
    const {
        token,
        user,
    } = state.user;

    return {
        token,
        user,
    };
};

export default connect(mapStateToProps)(StatsScreen)
