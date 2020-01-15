/**
 * smm App
 * @author: Giang Nguyen
 * @description: Redux store
 */
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
    reducers, 
    composeWithDevTools(
        applyMiddleware(),
    )
);

export default store;