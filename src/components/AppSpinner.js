import React, { Component } from 'react';
import Circle from 'react-native-progress/Circle';
import commonColor from '../../native-base-theme/variables/commonColor';

class AppSpinner extends Component {
    render(){
        return (
            <Circle size={30}  indeterminate={true} color={commonColor.brandPrimary}/>
        )
    }
}

export default AppSpinner;
