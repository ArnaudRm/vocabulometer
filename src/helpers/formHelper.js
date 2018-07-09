import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';

const formInputStyle = {
    borderColor: 'darkgrey',
    borderBottomWidth: 1,
    marginHorizontal: 18,
    paddingVertical: 8,
    marginBottom: 4,
    color: 'grey',
};

const styles = {
    defaultStyle:{
        marginBottom: 8,
    },
    error: {
        color : 'red'
    }
};

export const renderInput = ({
                                input, secureTextEntry, placeholder, meta: { touched, error, warning, dirty } , style, label, floatingLabel
                            }) => {
    let hasError= false;
    if(error){
        hasError= true;
    }

    return (
        <View>
            <Item
                floatingLabel={floatingLabel}
                error={hasError && touched}
                style={{...styles.defaultStyle , style}}
            >
                <Label>{label}</Label>
                <Input placeholder={placeholder} secureTextEntry={secureTextEntry} {...input}   />

            </Item>
            {hasError && touched && <Text style={styles.error}>{error}</Text>}
        </View>

    );
};
