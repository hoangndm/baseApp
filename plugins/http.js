import axios from 'react-native-axios';
import AuthService from '../services/auth.service';
import { URL } from 'react-native-dotenv';

const apiUrl = `${ URL }/api/v1/`;

/**
 * Create Axios
 */
const http = axios.create({
    baseURL: apiUrl,
})


/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our NodeJS back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */
http.interceptors.request.use(
    async (config) => {
        config.headers.common['Authorization'] = await AuthService.accessToken();
        return config;
    },
    error => {
        return Promise.reject(error);
    },
);

/**
 * Handle all error messages.
 */
http.interceptors.response.use(function (response) {
    return response;
}, function (error, res) {
    const { response } = error;
    if (response.status >= 301 && response.status <= 451) {
        if (response.status == 401) {
            
        }
        if(response.status == 413){
            
        }
        return Promise.reject(response);
    }

    return Promise.reject(response);
});

export default http;