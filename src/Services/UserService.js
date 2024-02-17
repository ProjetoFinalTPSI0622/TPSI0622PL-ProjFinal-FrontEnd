import { AxiosService } from '@/Services/AxiosService';
export const UserService = {

    getUsers: async () => {
        return await AxiosService.makeRequest('get', '/users');
    },

    getUser: async (id) => {
        return AxiosService.makeRequest('get', `/users/${id}`);
    },

    createUser: async (user) => {
        return AxiosService.makeRequest('post', '/users', user, );
    },


    createUserInfo: async (userInfo) => {
        return AxiosService.makeRequest('post', '/userInfo', userInfo, 'multipart/form-data');
    },

    updateUserInfo: async (formData) => {
        return AxiosService.makeRequest('post', '/userInfo/' + formData.get('user_id'), formData, 'multipart/form-data');
    },


    updateUser: async (user) => {
        return AxiosService.makeRequest('put', `/users/${user.id}`, user);
    },

    deleteUser: async (id) => {
        return AxiosService.makeRequest('delete', `/users/${id}`);
    },

    getTechnicians: async () => {
        return AxiosService.makeRequest('get', '/users/technicians');
    },

    getAuthedUser: async () => {
        return AxiosService.makeRequest('get', '/users/authed');
    },

    getRoles: async () => {
        return AxiosService.makeRequest('get', '/roles');
    },

    getGenders: async () => {
        return AxiosService.makeRequest('get', '/genders');
    },

    getCountries: async () => {
        return AxiosService.makeRequest('get', '/countries');
    },

    changePassword: async (passwords) => {
        return AxiosService.makeRequest('put', '/users/changePassword', passwords);
    },
    loadUserData: async (userId) => {
        return AxiosService.makeRequest('get', `/users/${userId}`);
    }
};
