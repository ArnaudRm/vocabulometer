import React from 'react';
import {
    Button,
    Text,
    Container,
    Content,
} from 'native-base';

export default class HomeScreen extends React.Component {
    render() {
        return (
            <Container>
                <Content padder>
                    <Button
                        full
                        primary
                        rounded
                        onPress={() => this.props.navigation.navigate('Other')}
                    >
                        <Text>Go to other screen</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}
