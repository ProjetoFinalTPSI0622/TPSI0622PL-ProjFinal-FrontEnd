import { AxiosService } from '@/Services/AxiosService';

export const CategoriesService = {
    getCategories: async () => {
        return await AxiosService.makeRequest('get', '/categories');
    },
    createCategory:async (category) => {
        return await AxiosService.makeRequest('post', '/categories', category);
    }

}