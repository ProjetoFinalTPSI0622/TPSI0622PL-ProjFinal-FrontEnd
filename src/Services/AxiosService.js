import axios from 'axios';

const axiosConfig = {
    baseURL: import.meta.env.VITE_API_URL,
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
                return { success: true, message: response.statusText, data: response.data };
            } else {
                return { success: false, message: response };
            }
        } catch (e) {
            return { success: false, message: e.message };
        }
    },
}