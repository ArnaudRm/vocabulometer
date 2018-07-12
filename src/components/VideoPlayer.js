import React from 'react';
import {
    Dimensions,
    WebView,
} from 'react-native';
import {Container} from 'native-base';
import AppSpinner from './AppSpinner';

export default class VideoPlayer extends React.Component {

    render() {
        const {width, height} = Dimensions.get('window');

        return (
                <WebView
                    renderLoading={() => {
                        return (
                            <Container style={{alignItems: 'center', justifyContent: 'center'}}>
                                <AppSpinner/>
                            </Container>
                        );

                    }}
                    startInLoadingState={true}
                    style={{height, width}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{uri: 'https://www.youtube.com/embed/' + this.props.id}}
                />
        );
    }
}