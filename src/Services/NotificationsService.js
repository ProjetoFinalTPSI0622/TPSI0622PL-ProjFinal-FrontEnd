import { AxiosService } from './AxiosService';

export const NotificationsService = {

    getNotifications: async() =>{
        return await AxiosService.makeRequest('get', '/notifications');
    },

    getNotificationsCount: async () => {
        return await AxiosService.makeRequest('get', '/notifications/check');
    },

};