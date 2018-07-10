import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import reducers from '../reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

// Note: createReactNavigationReduxMiddleware must be run before reduxifyNavigator
const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);

const persistConfig = {
    key: 'root',
    storage,
};

// TODO : ADD NAV REDUCER TO PERSISTENCE BLACK LIST
// If you persist nav reducer, app will boot on last visited screen and it can be more difficult to manage data fetching.
// Example : texts fetches are done on listScreen, each text is passed as an object while navigating from list to details.
// If you boot the app on details, it will crash the app because the object containing the text has'nt been passed during navigation.

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
    persistedReducer,
    {},
    compose(applyMiddleware(thunk,middleware))
);

let persistor = persistStore(store);

export {
     store,
    persistor
}