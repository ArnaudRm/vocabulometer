import React, {Component} from 'react';
import { Icon } from 'native-base';
import commonColor from '../../native-base-theme/variables/commonColor';
import { withNavigation } from 'react-navigation';

const BackButton = (props) => {
    return(
        <Icon
            name="chevron-left"
            type="Feather"
            onPress={() => props.navigation.goBack()}
            style={{
                fontSize:26,
                color: commonColor.brandPrimary
            }}
        />
    )
};

export default withNavigation(BackButton);