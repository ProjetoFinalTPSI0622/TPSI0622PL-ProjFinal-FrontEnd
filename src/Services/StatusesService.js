import { AxiosService } from '@/Services/AxiosService';

export const StatusesService = {
    getStatuses: async () => {
        return await AxiosService.makeRequest('get', '/statuses');
    },
    createStatus:async (status) => {
        return await AxiosService.makeRequest('post', '/statuses', status);
    },
    updateStatus: async (id, status) => {
        return AxiosService.makeRequest('put', `/statuses/${id}`, status);
    },
    deleteStatus:async (id) => {
        return await AxiosService.makeRequest('delete', `/statuses/${id}`);
    }
}