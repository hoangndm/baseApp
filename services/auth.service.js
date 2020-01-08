import AsyncStorage from '@react-native-community/async-storage';

/**
 * @class AuthService
 * @static
 * @hideconstructor
 */
class AuthService{
    /**
    * @static
    * @description Gets access token from the AsyncStorage
    * @return {string}
    */
    static async accessToken(){
        let token = await AsyncStorage.getItem('rollcallAccessToken');
        if(token){
            return token;
        }
        return '';
    }

    /**
    * @static
    * @description Sets access token at the AsyncStorage
    * @param {string} token
    * @return {void}
    */
    static async setAccessToken(accessToken){
        await AsyncStorage.setItem('rollcallAccessToken', accessToken);
    }

    /**
    * @static
    * @return {boolean}
    */
    static async isAuth(){
        return Boolean(await this.accessToken());
    }

    /**
    * @static
    * @description Clear all token of the AsyncStorage.
    * @returns {void}
    */
    static async logOut(){
        await AsyncStorage.removeItem('rollcallAccessToken');
    }

    /**
    * @static
    * @description Set user login
    * @returns {void}
    */
    static async setUser(user){
        await AsyncStorage.setItem('rollcallUser', JSON.stringify(user));
    }

    /**
    * @static
    * @description Get user login
    * @returns {void}
    */
    static async getUser(){
        let user = await AsyncStorage.getItem('rollcallUser');
        if(user){
            user = JSON.parse(user);
            return user;
        }
        return {};
    }
}

export default AuthService;
