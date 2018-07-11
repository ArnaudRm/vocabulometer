import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {
    Text,
    Container,
    Content,
    Card,
    CardItem,
    Grid,
    Col,
    Row,
    Button,
    H1,
    List,
    ListItem,
} from 'native-base';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    labelGray: {
        color: '#979797',
        fontSize: 10
    },
    imgSize: {
      width: '100%',
      height: 100,
      marginTop: 20,
    },
    txtCurrent: {
      fontSize: 14,
    },
    itemTeam: {
      width: '100%',
    },
    team: {
      width: '100%',
    }
});

export default class ContactScreen extends React.Component {
    render() {
        return (
            <Container>
              <Content padder>
                  <Card paddingBottom={20}>
                      <CardItem>
                          <Grid style={{minHeight: 60}}>
                            <Row size={20} paddingBottom={10} paddingTop={10}>
                              <H1>About the app</H1>
                            </Row>
                            <Row size={10}>
                              <Text style={styles.labelGray}>TEAM</Text>
                            </Row>
                            <Row size={20}>
                              <List style={styles.team}>
                                 <ListItem style={styles.itemTeam}>
                                   <Text style={styles.txtCurrent}>Arnaud AYREM</Text>
                                 </ListItem>
                                 <ListItem>
                                   <Text style={styles.txtCurrent}>Timothée BINET</Text>
                                 </ListItem>
                                 <ListItem>
                                   <Text style={styles.txtCurrent}>Pierre DUMOULIN</Text>
                                 </ListItem>
                                 <ListItem>
                                   <Text style={styles.txtCurrent}>Gautier URSO</Text>
                                 </ListItem>
                              </List>
                            </Row>
                          </Grid>
                      </CardItem>
                      <CardItem>
                          <Grid style={{minHeight: 60}}>
                            <Row size={20} paddingBottom={10} paddingTop={10}>
                              <H1>About project</H1>
                            </Row>
                            <Row size={10}>
                              <Text style={styles.labelGray}>TEAM</Text>
                            </Row>
                            <Row size={50}>
                              <Text style={styles.txtCurrent}>This project has been developed by a student from the Intelligent Media Processing laboratory, in the Osaka Prefecture University. </Text>
                            </Row>
                          </Grid>
                      </CardItem>
                      <CardItem>
                          <Grid>
                            <Row>
                                <Image resizeMode={'contain'} source={require('../../assets/bordeaux.png')} style={styles.imgSize}/>
                            </Row>
                            <Row>
                                <Image resizeMode={'contain'} source={require('../../assets/imlab_logo.png')} style={styles.imgSize}/>
                            </Row>
                            <Row>
                                <Image resizeMode={'contain'} source={require('../../assets/opu_logo.png')} style={styles.imgSize}/>
                            </Row>
                          </Grid>
                      </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}
