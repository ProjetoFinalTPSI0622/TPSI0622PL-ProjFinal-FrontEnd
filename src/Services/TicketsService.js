import axios from 'axios';

const axiosConfig = {
    baseURL: 'http://localhost:8000/api',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 30000,
};

export const TicketsService = {
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

    getTickets: async () => {
        return await TicketsService.makeRequest('get', '/tickets');
    },

    getTicket: async (id) => {
        return TicketsService.makeRequest('get', `tickets/${id}`);
    },

    createTicket: async (title, description, priority, category) => {
        return TicketsService.makeRequest('post', 'tickets', { title, description, priority, category });
    },

    updateTicket: async (id, title, description, priority, type) => {
        return TicketsService.makeRequest('put', `tickets/${id}`, { title, description, priority, type });
    },

    deleteTicket: async (id) => {
        return TicketsService.makeRequest('delete', `tickets/${id}`);
    },

    getComments: async (id) => {
        return TicketsService.makeRequest('get', `tickets/${id}/comments`);
    },

    getCategories: async () => {
        return TicketsService.makeRequest('get', 'categories');
    },

    getPriorities: async () => {
        return TicketsService.makeRequest('get', 'priorities');
    },

    getMyTickets: async (id) => {
        return TicketsService.makeRequest('get', `tickets/user/${id}`);
    },



}