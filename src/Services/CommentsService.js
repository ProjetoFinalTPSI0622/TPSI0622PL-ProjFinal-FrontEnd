import { AxiosService } from '@/Services/AxiosService';

export const CommentsService = {

    getComments: async (id) => {
        return AxiosService.makeRequest('get', `tickets/${id}/comments`);
    },

    createComment: async (commentData) => {
        return AxiosService.makeRequest('post', 'comments', commentData);
    },

    deleteComment: async (id) => {
        return AxiosService.makeRequest('delete', `comments/${id}`);
    },

    getCommentTypes: async () => {
        return AxiosService.makeRequest('get', 'commentTypes');
    }
}