import React from 'react';
import {
    Text,
    List,
    ListItem,
    Thumbnail,
    Left,
    Body,
    Right,
    Button,
} from 'native-base';

export default class TextList extends React.Component {

    renderListItems() {
        return (
            this.props.texts.map((text) => {
                return (
                    <ListItem thumbnail key={text.title}>
                        <Left>
                            <Thumbnail source={{uri: text.image}}/>
                        </Left>
                        <Body>
                        <Text>{text.title}</Text>
                        <Text note numberOfLines={1}>{text.text}</Text>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Text>Lire plus</Text>
                            </Button>
                        </Right>
                    </ListItem>
                )
            })
        );
    }


    render() {
        return (
            <List>
                {this.renderListItems()}
            </List>
        );
    }
}
