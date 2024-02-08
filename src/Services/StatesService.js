import { AxiosService } from '@/Services/AxiosService';

export const StatesService = {
    getStates: async () => {
        return await AxiosService.makeRequest('get', '/states');
    },

}