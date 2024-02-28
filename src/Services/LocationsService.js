import { AxiosService } from '@/Services/AxiosService';

export const LocationsService = {
    getLocations: async () => {
        return await AxiosService.makeRequest('get', '/locations');
    },
    createLocation:async (location) => {
        return await AxiosService.makeRequest('post', '/locations', location);
    },
    updateLocation: async (id, location) => {
        return await AxiosService.makeRequest('put', `/locations/${id}`, location);
    },
    deleteLocation:async (id) => {
        return await AxiosService.makeRequest('delete', `/locations/${id}`);
    }
}