import { defineStore } from 'pinia';

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        token: '',
        isAuthed: false
    }),
    getters: {
        getToken() {
            return this.token;
        },
        getIsAuthed() {
            return this.isAuthed;
        }
    },
    actions: {
        setToken(token) {
            this.token = token;
            this.isAuthed = true;
        },
        deleteToken() {
            this.token = '';
        },
    }
});