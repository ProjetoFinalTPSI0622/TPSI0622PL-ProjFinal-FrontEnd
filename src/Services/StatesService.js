import { AxiosService } from '@/Services/AxiosService';

export const StatesService = {
    getStates: async () => {
        return await AxiosService.makeRequest('get', '/states');
    },
    createState:async (state) => {
        return await AxiosService.makeRequest('post', '/states', state);
    }

}