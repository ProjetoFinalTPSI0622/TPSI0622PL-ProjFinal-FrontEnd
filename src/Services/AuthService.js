import axios from 'axios';
import { CookieService } from './CookiesService.js';
import { useAuthStore } from "../Stores/AuthStore.js";


export const AuthService = {
    login: async (email, password) => {
        try {
            const response = await axios.put('http://localhost:8000/api/auth/login', {
                "email": email,
                "password": password
            });

            if (response.status === 200) {
                console.log(response.data);

                return {success: true, message: 'Login successful'}
            } else {
                return {success: false, message: 'Login failed'}
            }
        } catch (e) {
            return {success: false, message: 'An error occurred'}
        }
    },

    checkAuth: async () => {
        try {
            const reponse = await axios.get('http://localhost:8000/api/auth/check');
            console.log(reponse);
            if (response.status === 200) {
                return {success: true, message: 'Authenticated'}
            } else {
                return {success: false, message: 'Not authenticated'}
            }
        } catch (e) {
            return {success: false, message: 'Not authenticated'}
        }
    },

}

