import axios from 'axios';

const axiosConfig = {
    baseURL: 'http://localhost:8000/api',
    withCredentials: true,
    timeout: 30000,
};

export const AxiosService = {
    makeRequest: async (method, url, data = undefined, contentType = 'application/json') => {
        try {
            const response = await axios({
                method,
                url,
                data,
                headers: {
                    'Content-Type': contentType
                },
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
}