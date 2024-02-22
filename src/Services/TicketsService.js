import { AxiosService } from '@/Services/AxiosService';

export const TicketsService = {

    getTickets: async () => {
        return await AxiosService.makeRequest('get', '/tickets');
    },

    getTicket: async (id) => {
        return AxiosService.makeRequest('get', `tickets/${id}`);
    },

    createTicket: async (ticketData) => {
        return AxiosService.makeRequest('post', 'tickets', ticketData, 'multipart/form-data');
    },

    updateTicket: async (ticketData) => {
        return AxiosService.makeRequest('put', `tickets/${id}`, ticketData);
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

    getStatus : async () => {
        return AxiosService.makeRequest('get', 'status');
    },

    getMyTickets: async (id) => {
        return AxiosService.makeRequest('get', `tickets/user/${id}`);
    },

    assignTechnician: async (ticketId, technicianId) => {
        return AxiosService.makeRequest('put', `tickets/${ticketId}/assign/${technicianId}`);
    },

    getStatuses: async () => {
        return AxiosService.makeRequest('get', 'status');
    },

    updateStatus : async (ticketId, statusId) => {
        return AxiosService.makeRequest('put', `tickets/${ticketId}/status/${statusId}`);
    },

    updatePriority: async (ticketId, priorityId) => {
        return AxiosService.makeRequest('put', `tickets/${ticketId}/priority/${priorityId}`);
    },

    closeTicket: async (ticketId) => {
        return AxiosService.makeRequest('put', `tickets/${ticketId}/close`);
    },

    reopenTicket: async (ticketId) => {
        return AxiosService.makeRequest('put', `tickets/${ticketId}/reopen`);
    },
}