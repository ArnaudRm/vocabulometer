import React, { Component } from 'react';
import { Spinner } from 'native-base';
import commonColor from '../../native-base-theme/variables/commonColor';

class AppSpinner extends Component {
    render(){
        return (
            <Spinner color={commonColor.brandPrimary}/>
        )
    }
}

export default AppSpinner;
