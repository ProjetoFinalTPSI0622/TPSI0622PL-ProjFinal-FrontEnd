import axios from 'axios';

const axiosConfig = {
    baseURL: 'http://localhost:8000/api',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
};

export const UserService = {
    makeRequest: async (method, url, data) => {
        try {
            const response = await axios({
                method,
                url,
                data,
                ...axiosConfig,
            });

            if (response.status === 200) {
                return { success: true, message: 'Authenticated', data: response.data };
            } else {
                return { success: false, message: 'Not authenticated' };
            }
        } catch (e) {
            return { success: false, message: 'Not authenticated' };
        }
    },

    getUsers: async () => {
        return await UserService.makeRequest('get', '/users');
    },

    getUser: async (id) => {
        return UserService.makeRequest('get', `/users/${id}`);
    },

    createUser: async (user) => {
        return UserService.makeRequest('post', '/users', user);
    },

    createUserInfo: async (userInfo) => {
        return UserService.makeRequest('post', '/userInfo', userInfo);
    },

    updateUser: async (user) => {
        return UserService.makeRequest('put', `/users/${user.id}`, user);
    },

    deleteUser: async (id) => {
        return UserService.makeRequest('delete', `/users/${id}`);
    },

    getTechnicians: async () => {
        return UserService.makeRequest('get', '/users/technicians');
    },

    getAuthedUser: async () => {
        return UserService.makeRequest('get', '/users/authed');
    },

    getRoles: async () => {
        return UserService.makeRequest('get', '/roles');
    },

    getGenders: async () => {
        return UserService.makeRequest('get', '/genders');
    },

    getCountries: async () => {
        return UserService.makeRequest('get', '/countries');
    },
};
