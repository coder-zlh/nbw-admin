import {createStore, applyMiddleware} from 'redux';
import combineReducers from './reducers.js';

import promiseMiddleware from './promiseMiddleware'

let store = createStore(combineReducers, applyMiddleware(promiseMiddleware));

if (module.hot) {
    module.hot.accept("./reducers", () => {
        const nextCombineReducers = require("./reducers").default;
        store.replaceReducer(nextCombineReducers);
    });
}

export default store;