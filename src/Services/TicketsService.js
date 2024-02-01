import { AxiosService } from './AxiosService';

export const TicketsService = {

    getTickets: async () => {
        return await AxiosService.makeRequest('get', '/tickets');
    },

    getTicket: async (id) => {
        return AxiosService.makeRequest('get', `tickets/${id}`);
    },

    createTicket: async (title, description, priority, category) => {
        return AxiosService.makeRequest('post', 'tickets', { title, description, priority, category });
    },

    updateTicket: async (id, title, description, priority, type) => {
        return AxiosService.makeRequest('put', `tickets/${id}`, { title, description, priority, type });
    },

    deleteTicket: async (id) => {
        return AxiosService.makeRequest('delete', `tickets/${id}`);
    },

    getComments: async (id) => {
        return AxiosService.makeRequest('get', `tickets/${id}/comments`);
    },

    getCategories: async () => {
        return AxiosService.makeRequest('get', 'categories');
    },

    getPriorities: async () => {
        return AxiosService.makeRequest('get', 'priorities');
    },

    getMyTickets: async (id) => {
        return AxiosService.makeRequest('get', `tickets/user/${id}`);
    },



}