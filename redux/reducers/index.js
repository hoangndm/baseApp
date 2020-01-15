/**
 * smm App
 * @author: Giang Nguyen
 * @description: Redux reducers
 */
import { combineReducers } from 'redux';
import userReducer from './user';

export default combineReducers({
    user: userReducer,
});
