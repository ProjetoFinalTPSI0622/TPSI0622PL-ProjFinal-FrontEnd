import axios from 'axios';

const axiosConfig = {
    baseURL: 'http://localhost:8000/api',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 30000,
};

export const AuthService = {
    makeRequest: async (method, url, data) => {
        try {
            const response = await axios({
                method,
                url,
                data,
                ...axiosConfig,
            });

            if (response.status === 200) {
                return { success: true, message: response.data.message, data: response.data };
            } else {
                return { success: false, message: response.data.message };
            }
        } catch (e) {
            return { success: false, message: 'An error occurred' };
        }
    },

    login: async (email, password) => {
        return AuthService.makeRequest('post', '/auth/login', { email, password });
    },

    checkAuth: async () => {
        return AuthService.makeRequest('get', '/auth/check');
    },

    userLogout: async () => {
        return AuthService.makeRequest('get', '/auth/logout');
    },
};
