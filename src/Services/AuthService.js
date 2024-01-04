import axios from 'axios';
import { CookiesService } from './CookiesService';
import {useAuthStore} from "../Stores/AuthStore.js";

export const AuthService = {
    login: async (email, password) => {
        try {
            const response = await axios.put('http://localhost:8000/api/user/login', {
                "email": email,
                "password": password
            });

            if (response.status === 200) {
                const token = response.data.token;

                await useAuthStore.setToken(token);
                await CookiesService.saveTokenToCookie(token);

                return {success: true, message: 'Login successful'}
            } else {
                return {success: false, message: 'Login failed'}
            }
        } catch (e) {
            return {success: false, message: 'An error occurred'}
        }
    }
}
