import {createStore, applyMiddleware} from 'redux';  //引入store
import thunk from 'redux-thunk';
import rootReducers from './reducers/index';

const initialState  = {};
const middleware = [thunk];

export const store = createStore(rootReducers, initialState, applyMiddleware(...middleware));