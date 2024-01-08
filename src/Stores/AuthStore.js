import { defineStore } from 'pinia';
import { CookieService } from "../Services/CookiesService.js";

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        isAuthed: false,
        token: ''
    }),
    getters: {
        getToken() {
            return this.token
        },
        getIsAuthed() {
            return this.isAuthed;
        }
    },
    actions: {
        async setToken(token) {
            this.token = token;
            this.isAuthed = true;
        },
        deleteToken() {
            this.token = '';
            this.isAuthed = false;
        },
    }
});
