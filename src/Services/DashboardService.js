import axios from 'axios';

const axiosConfig = {
    baseURL: 'http://localhost:8000/api',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 30000,
};

export const DashboardService = {
    makeRequest: async (method, url, data) => {
        try{
            const response = await axios({
                method,
                url,
                data,
                ...axiosConfig,
            });
            if (response.status === 200){
                return { success: true, message: response.data.message, data: response.data };
            }
            else{
                return { success: false, message: response.data.message, data: response.data };
            }

        } catch (error) {
            return { success: false, message: error.message };
        }
    },

    getTicketsPerDay: async () => {
        return await DashboardService.makeRequest('get', '/dashboard/ticketsPerDay');
    },

    getTicketsByStatus: async () => {
        return await DashboardService.makeRequest('get', '/dashboard/getStatsByStatus');
    },

    

}