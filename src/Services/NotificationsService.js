import axios from 'axios';
import { NotificationHandler } from "./NotificationHandler.js";

const axiosConfig = {
    baseURL: 'http://localhost:8000/api',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 30000,
};

export const NotificationsService = {
    makeRequest: async (method, url, data) => {
        try {
            const response = await axios({
                method,
                url,
                data,
                ...axiosConfig,
            });
            if (response.status === 200) {
                return {success: true, data: response.data};
            } else {
                return {success: false, data: response.data};
            }

        } catch (error) {
            return {success: false, message: error.message};
        }
    },

    getNotifications: async () => {
        const response = await NotificationsService.makeRequest('get', '/notifications');
        if (response.success) {
            return {success: true, data: NotificationHandler(response.data)};
        } else {
            return {success: false, data: response.data};
        }
    },

    getNotificationsCount: async () => {
        return await NotificationsService.makeRequest('get', '/notifications/check');
    },

};