import axios from 'axios';

const axiosConfig = {
    baseURL: 'http://localhost:8000/api',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 30000,
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

    updateUserInfo : async (formData) => {
        try {
            const response = await axios.post('http://localhost:8000/api/userInfo/' + formData.get('user_id'), formData,{
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                withCredentials: true,
            });
            console.log(response.data);
            if (response.status === 200) {
                return {success: true, message: 'Authenticated', data: response.data}
            } else {
                return {success: false, message: 'Not authenticated'}
            }
        } catch (e) {
            return {success: false, message: 'Not authenticated'}
        }
    },

    deleteUser : async (id) => {
        try {
            const response = await axios.delete('http://localhost:8000/api/users/' + id,{
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            });
            console.log(response.data);
            if (response.status === 200) {
                return {success: true, message: 'Authenticated', data: response.data}
            } else {
                return {success: false, message: 'Not authenticated'}
            }
        } catch (e) {
            return {success: false, message: 'Not authenticated'}
        }
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
