import React from 'react';
import {
    Text,
    List,
    ListItem,
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
                        <Body>
                        <Text>{text.title}</Text>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Text>Read more</Text>
                            </Button>
                        </Right>
                    </ListItem>
                );
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
