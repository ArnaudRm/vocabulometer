import React, {Component} from 'react';
import {Image, View, Dimensions} from 'react-native';
import {Button, Text, Icon} from 'native-base';
import Carousel from 'react-native-snap-carousel';
const {width} = Dimensions.get('window');
import {withNavigation} from 'react-navigation';

class VideosCarousel extends Component {

    renderItem = ({item}) => {
        return (
            <View>
                <Image
                    source={{uri: `https://img.youtube.com/vi/${item.youtubeId}/0.jpg`}}
                    style={{
                        width: width,
                        height: 200,
                    }}

                />
                <Text
                    style={{
                        paddingTop: 8,
                        paddingLeft: 8,
                        fontSize: 14,
                        fontWeight: 'bold',
                        color: 'white',
                        position: 'absolute',
                    }}
                >
                    {item.title}

                </Text>
                <Button
                    full
                    style={{
                        backgroundColor: '#6FB98F'
                    }}
                    onPress={() => this.props.navigation.navigate('Video', item)}
                >
                    <Text>WATCH IT</Text>
                    <Icon name="play" type="Feather"/>
                </Button>
            </View>
        );
    }

    render() {
        return (
            <Carousel
                layout={this.props.layout}
                layoutCardOffset={this.props.layoutCardOffset}
                ref={(c) => {
                    this._carousel = c;
                }}
                data={this.props.videos}
                renderItem={this.renderItem}
                sliderWidth={width - 20}
                itemWidth={width - 20}
            />
        );
    }
}

export default withNavigation(VideosCarousel);
