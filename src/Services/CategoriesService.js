import { AxiosService } from '@/Services/AxiosService';

export const CategoriesService = {
    getCategories: async () => {
        return await AxiosService.makeRequest('get', '/categories');
    },
    createCategory:async (category) => {
        return await AxiosService.makeRequest('post', '/categories', category);
    },
    updateCategory: async (category) => {
        return AxiosService.makeRequest('put', `/categories/${category.id}`, category);
    },
    deleteCategory:async (id) => {
        return await AxiosService.makeRequest('delete', `/categories/${id}`);
    }
}