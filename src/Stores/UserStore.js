import { defineStore } from 'pinia';
import { UserService } from '@/Services/UserService';

export const useAuthedUserStore = defineStore({
    id: 'authedUser',
    state: () => ({
        currentUser: null,
        userRole: '',
        isLoading: true,
    }),
    actions: {
        async fetchAuthedUser() {
            try {
                const response = await UserService.getAuthedUser();
                if (response.success) {
                    this.currentUser = response.data;
                    this.userRole = response.data.roles[0].name;
                } else {
                    console.error('Invalid response structure:', response);
                }
            } catch (error) {
                console.error("Error fetching user:", error);
            } finally {
                this.isLoading = false;
            }
        },
    },
});