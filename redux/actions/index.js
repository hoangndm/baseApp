/**
 * smm App
 * @author: Giang Nguyen
 * @description: Redux actions
 */
import { USER_DATA } from './type.js';

// Action add user_data
export const setUserData = (data) => {
    return {
        type: USER_DATA,
        data,
    }
}
