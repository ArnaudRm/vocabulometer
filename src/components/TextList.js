import React from 'react';
import {
    Text,
    List,
    ListItem,
    Body,
    Right,
    Button,
} from 'native-base';
import {withNavigation} from 'react-navigation';

class TextList extends React.Component {

    renderListItems() {
        return (
            this.props.texts.map((text) => {
                return (
                    <ListItem thumbnail key={text._id}>
                        <Body>
                        <Text>{text.title}</Text>
                        </Body>
                        <Right>
                            <Button
                                onPress={() => this.props.navigation.navigate('Text', text)}
                                transparent
                            >
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


export default withNavigation(TextList);
