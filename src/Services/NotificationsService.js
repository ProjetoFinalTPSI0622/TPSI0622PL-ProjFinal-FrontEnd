import { AxiosService } from '@/Services/AxiosService';

export const NotificationsService = {

    getNotifications: async() =>{
        return await AxiosService.makeRequest('get', '/notifications');
    },

    getNotificationsCount: async () => {
        return await AxiosService.makeRequest('get', '/notifications/check');
    },

    markAsSeen: async (id) => {
        return await AxiosService.makeRequest('post', `/notifications/markAsSeen/${id}`);
    },

};