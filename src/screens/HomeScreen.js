import React from 'react';
import {StyleSheet} from 'react-native';
import {
    Button,
    Text,
    Container,
    Content,
    H1,
    H3,
    Grid,
    Col,
    Row,
    Icon,
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
    btn: {
        marginTop: 8,
    }
});


export default class HomeScreen extends React.Component {
    render() {
        return (
            <Container>
                <Content padder contentContainerStyle={styles.container}>
                    <Grid style={{minHeight: 256}}>
                        <Row size={30}>
                            <H1>Hello!</H1>
                        </Row>
                        <Row size={25}>
                            <H3>Bienvenue sur Vocabulometer</H3>
                        </Row>
                        <Row size={45}>
                            <Text>
                                Vocabulometer a pour objectif d'aider à l'apprentissage de l'anglais en offrant une
                                plateforme permettant d'enrichir son vocabulaire.
                            </Text>
                        </Row>
                    </Grid>

                    <Button
                        full
                        iconLeft
                        success
                        rounded
                        style={styles.btn}
                        onPress={() => this.props.navigation.navigate('Other')}
                    >
                        <Icon
                            type="FontAwesome"
                            name='thermometer-empty'
                        />
                        <Text>Textes faciles</Text>
                    </Button>
                    <Button
                        full
                        iconLeft
                        primary
                        rounded
                        style={styles.btn}
                        onPress={() => this.props.navigation.navigate('Other')}
                    >
                        <Icon
                            type="FontAwesome"
                            name='thermometer-half'
                        />
                        <Text>Textes recommandés</Text>
                    </Button>
                    <Button
                        full
                        iconLeft
                        danger
                        rounded
                        style={styles.btn}
                        onPress={() => this.props.navigation.navigate('Other')}
                    >
                        <Icon
                            type="FontAwesome"
                            name='thermometer-full'
                        />
                        <Text>Hardcore</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}
