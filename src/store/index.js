import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import reducers from '../reducers';

// Note: createReactNavigationReduxMiddleware must be run before reduxifyNavigator
const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);

const store = createStore(
    reducers,
    {},
    compose(applyMiddleware(thunk,middleware))
);

export default store;
