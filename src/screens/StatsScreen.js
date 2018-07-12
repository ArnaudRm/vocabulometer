import React from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import BarChart from '../components/BarChart';
import {Container, Content, H1, Grid, Col, List, ListItem, Card, CardItem} from 'native-base';
import {fetchUserStats, fetchVideos} from "../actions";
import {connect} from "react-redux";

class StatsScreen extends React.Component {

    buildDates(arr) {
        const dates = [];
        const data = [];
        const maxDate = arr.days.reduce((acc, current) => {
            if (new Date(current._id) > new Date(acc._id))
                return current;
            else
                return acc;
        });

        arr = arr.days

        const minDate = new Date(maxDate._id) - 24 * 3600 * 1000 * 7;
        arr.sort((a, b) => new Date(a) - new Date(b));
        dates.push(new Date(minDate));
        data[0] = arr.find((val) => new Date(val._id).getDay() === new Date(minDate).getDay()) || {count:0};

        for (let i = 1; i < 7; i++) {
            dates[i] = new Date(minDate + 24 * 3600 * 1000 * i);
            data[i] = arr.find((val) => new Date(val._id).getDay() === dates[i].getDay()) || {count:0};
        }
        const final = data.map((v) => v.count);
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
                    <H1 style={{paddingHorizontal: 8, paddingBottom: 8}}>New recents words read</H1>
                    <List >
                        {
                            newRecentWordsRead.words.slice(0,12).map((item,index) => {
                                return(
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
