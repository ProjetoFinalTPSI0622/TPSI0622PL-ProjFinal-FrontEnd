import { AxiosService } from '@/Services/AxiosService';
export const AuthService = {

    login: async (email, password) => {
        return await AxiosService.makeRequest('post', '/auth/login', { email, password });
    },

    checkAuth: async () => {
        return await AxiosService.makeRequest('get', '/auth/check');
    },

    userLogout: async () => {
        return await AxiosService.makeRequest('get', '/auth/logout');
    },
    userRoles: async () => {
        return await AxiosService.makeRequest('get', '/auth/roles');
    },
    getUserRole: async (id) => {
        return await AxiosService.makeRequest('get', `/auth/roles/${id}`);
    }
};
