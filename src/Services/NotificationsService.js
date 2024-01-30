import axios from 'axios';

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
            console.log(response.data);
            if (response.status === 200) {
                return {success: true, data: response.data};
            } else {
                return {success: false, data: response.data};
            }

        } catch (error) {
            return {success: false, message: error.message};
        }
    },

    getNotificationsCount: async () => {
        return await NotificationsService.makeRequest('get', '/notifications/check');
    },

    getNotifications: async () => {
        return await NotificationsService.makeRequest('get', '/notifications');
    },
};