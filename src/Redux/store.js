import { createStore, combineReducers, applyMiddleware }  from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { authReducer } from './reducers/auth';
import { notificationReducer } from './reducers/notification';
import { allosReducer } from './reducers/allos';
import { vendredjReducer } from './reducers/vendredj';
import { composeWithDevTools } from 'redux-devtools-extension';

let store = createStore(
    combineReducers({
        auth: authReducer,
        notification: notificationReducer,
        allos: allosReducer,
        vendredj: vendredjReducer,
    }),
    {},
    composeWithDevTools(applyMiddleware(createLogger(), thunk))
);

export default store;
export const dispatch = store.dispatch;