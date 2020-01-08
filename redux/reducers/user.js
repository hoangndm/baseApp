/**
 * rollcall App
 * @author: Giang Nguyen
 * @description: Redux reducer for user
 */
import { USER_DATA } from '../actions/type.js';

const userReducer = (state = {}, action) => {
    switch(action.type) {
        case USER_DATA:
            return action.data ;
        default:
            return state;
    }
}

export default userReducer;