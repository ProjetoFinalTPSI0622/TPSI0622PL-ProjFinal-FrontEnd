import axios from 'axios';
import { CookieService } from './CookiesService.js';
import { useAuthStore } from "../Stores/AuthStore.js";


export const AuthService = {
    login: async (email, password) => {
        try {
            const response = await axios.post('http://localhost:8000/api/auth/login', {
                email: email,
                password: password
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            });

            if (response.status === 200) {
                console.log(response.data);

                return { success: true, message: 'Login successful' };
            } else {
                return { success: false, message: 'Login failed' };
            }
        } catch (e) {
            return { success: false, message: 'An error occurred' };
        }
    },

    checkAuth: async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/auth/check',{
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            });
            console.log(response.data);
            if (response.status === 200 && response.data.auth) {
                return {success: true, message: 'Authenticated'}
            } else {
                return {success: false, message: 'Not authenticated'}
            }
        } catch (e) {
            return {success: false, message: 'Not authenticated'}
        }
    },

}

