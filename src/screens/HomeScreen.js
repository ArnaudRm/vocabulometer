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
    Card,
    CardItem,
    Body,
} from 'native-base';

const styles = StyleSheet.create({
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
        width: '100%',
        justifyContent: 'flex-start'
    },
    btnRevise: {
        backgroundColor: '#FFD43A'
    },
    btnEasy: {
        backgroundColor: '#20B449'
    },
    btnHard: {
        backgroundColor: '#FF473A',

    },
    btnProfile: {
        backgroundColor: '#6FB98F',
    },
    labelGray: {
        color: '#979797',
        fontSize: 10
    },
    paddingButton: {
        paddingHorizontal: 20,
        paddingVertical: 0,
        marginVertical: 0,
        maxHeight: 60,
    },
    txtStat: {
        fontSize: 12,
    }
});


export default class HomeScreen extends React.Component {
    render() {
        return (
            <Container>
                <Content padder contentContainerStyle={styles.container}>
                {/* PROFILE */}
                  <Card paddingBottom={20}>
                    <CardItem>
                    <Grid style={{minHeight: 60}}>
                        <Row size={10}>
                          <Text style={styles.labelGray}>PROFILE</Text>
                        </Row>
                        <Row size={20} paddingBottom={10} paddingTop={10}>
                            <H1>See your statistics !</H1>
                        </Row>
                    </Grid>
                    </CardItem>
                    <CardItem>

                    <Grid style={{minHeight: 80}}>
                      <Row size={80}>
                        <Col size={40} >
                          <Button
                              success
                              style={[styles.btn,styles.btnProfile]}
                          >
                              <Text>My profile</Text>
                          </Button>
                        </Col>
                        <Col size={60} paddingLeft={20}>
                            <Text style={styles.txtStat}>Score:  <Text style={{fontWeight: 'bold'}}>10</Text> points</Text>
                            <Text style={styles.txtStat}>Words read: <Text style={{fontWeight: 'bold'}}>542</Text></Text>
                            <Text style={styles.txtStat}>New words encountered: <Text style={{fontWeight: 'bold'}}>15</Text></Text>
                            <Text style={styles.txtStat}>New recently read words: <Text style={{fontWeight: 'bold'}}>152</Text></Text>
                        </Col>
                      </Row>
                    </Grid>

                    </CardItem>
                </Card>

                {/* RECOMMENDATIONS */}
                <Card paddingBottom={20}>
                <CardItem>
                    <Grid style={{minHeight: 60}}>
                        <Row size={10}>
                          <Text style={styles.labelGray}>RECOMMANDATIONS</Text>
                        </Row>
                        <Row size={20} paddingBottom={10} paddingTop={10}>
                            <H1>Train your english skills with vocabulometer !</H1>
                        </Row>
                    </Grid>

                    </CardItem>
                    <CardItem style={styles.paddingButton}>
                      <Button
                          full
                          style={[styles.btn,styles.btnRevise]}
                          onPress={() => this.props.navigation.navigate('EasyTexts')}
                      >
                          <Icon
                              type="FontAwesome"
                              name='thermometer-empty'
                          />
                          <Text>Revise</Text>
                      </Button>
                    </CardItem>
                    <CardItem style={styles.paddingButton}>
                    <Button
                        full
                        style={[styles.btn,styles.btnEasy]}
                        onPress={() => this.props.navigation.navigate('RecommendedTexts')}
                    >
                        <Icon
                            type="FontAwesome"
                            name='thermometer-half'
                        />
                        <Text>Easy</Text>
                    </Button>
                    </CardItem>
                    <CardItem style={styles.paddingButton}>
                    <Button
                        full
                        style={[styles.btn,styles.btnHard]}
                        onPress={() => this.props.navigation.navigate('HardTexts')}
                    >
                        <Icon
                            type="FontAwesome"
                            name='thermometer-full'
                            padding={50}
                        />
                        <Text>Hard</Text>
                    </Button>
                    </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}
