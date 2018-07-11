import React from 'react';
import {
    Text,
    List,
    ListItem,
    Body,
    Right,
    Button,
} from 'native-base';
import {NavigationActions} from "react-navigation";
import { connect } from 'react-redux';

const navigateToText = (text) => {
    NavigationActions.navigate({
        routeName: 'Text',
        params:text,
    });
};

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

const mapStateToProps = (state) =>{
    return {};
};

export default connect(mapStateToProps)(TextList);
