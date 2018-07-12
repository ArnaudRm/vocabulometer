import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Container, Content } from 'native-base';
import VideoPlayer from '../components/VideoPlayer';

export default class VideoScreen extends React.Component {

    render() {
        const video = this.props.navigation.state.params;
        console.log(video);
        return (
            <Container>
                <Content>
                    <VideoPlayer
                        id={video.youtubeId}
                        uri={video.uri}
                    />
                </Content>
            </Container>

        );
    }
}

