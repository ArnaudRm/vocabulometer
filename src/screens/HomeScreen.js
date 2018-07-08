import React from 'react';
import { StyleSheet } from 'react-native';
import {
    Button,
    Text,
    Container,
    Content,
    H1,
    H3,
    Col,
} from 'native-base';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    title: {
        paddingVertical: 24,
    },
    subtitle: {
        marginBottom: 24,
    },
    description: {
        paddingHorizontal: 8,
        marginBottom: 16,
    },
});


export default class HomeScreen extends React.Component {
    render() {
        return (
            <Container>
                <Content padder contentContainerStyle={styles.container}>
                    <Col style={styles.title}>
                        <H1>Hello!</H1>
                    </Col>
                    <Col style={styles.subtitle}>
                        <H3>Bienvenue sur Vocabulometer</H3>
                    </Col>
                    <Col style={styles.description}>
                        <Text>
                            Vocabulometer a pour objectif d'aider à l'apprentissage de l'anglais en offrant une plateforme permettant d'enrichir son vocabulaire.
                        </Text>
                    </Col>

                    <Button
                        full
                        primary
                        rounded
                        onPress={() => this.props.navigation.navigate('Other')}
                    >

                        <Text>Liste des textes</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}
