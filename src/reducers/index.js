import { combineReducers } from 'redux';
import TextReducer from './TextReducer';
import { reducer as formReducer } from 'redux-form';
import {
    createNavigationReducer,
} from 'react-navigation-redux-helpers';
import AppNavigator from '../navigation/AppNavigator';


const navReducer = createNavigationReducer(AppNavigator);

const appReducer = combineReducers({
    text: TextReducer,
    nav: navReducer,
    form: formReducer,
});

const rootReducer = (state, action) => {
    let newState = state;
    if (action.type === 'logout_success') {
        newState = undefined;
    }
    return appReducer(newState, action);
};

export default rootReducer;
