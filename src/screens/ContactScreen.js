import React from 'react';
import {StyleSheet} from 'react-native';
import {
    Text,
    Container,
    Content,
} from 'native-base';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
});

export default class ContactScreen extends React.Component {
    render() {
        return (
            <Container>
                <Content padder contentContainerStyle={styles.container}>
                   <Text>Fraté met du contenu de contact la</Text>
                </Content>
            </Container>
        );
    }
}
