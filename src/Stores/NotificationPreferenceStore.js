import { defineStore } from 'pinia';

export const useNotificationPreferenceStore = defineStore({
    id: 'notification-preference',
    state: () => ({
        enableSound: true,
        enableTicketCreated: true,
        enableTicketStatusUpdated: true,
        enableTicketPriorityUpdated: true,
        enableTicketNewComment: true,
        enableTicketAssignment: true,
    }),
    getters: {

    },
    actions: {

    },
    mutations: {
        setEnableSound(enableSound) {
            this.enableSound = enableSound;
            this.saveToLocalStorage();
        },
        setEnableTicketCreated(enableTicketCreated) {
            this.enableTicketCreated = enableTicketCreated;
            this.saveToLocalStorage();
        },
        setEnableTicketStatusUpdated(enableTicketStatusUpdated) {
            this.enableTicketStatusUpdated = enableTicketStatusUpdated;
            this.saveToLocalStorage();
        },
        setEnableTicketPriorityUpdated(enableTicketPriorityUpdated) {
            this.enableTicketPriorityUpdated = enableTicketPriorityUpdated;
            this.saveToLocalStorage();
        },
        setEnableTicketNewComment(enableTicketNewComment) {
            this.enableTicketNewComment = enableTicketNewComment;
            this.saveToLocalStorage();
        },
        setEnableTicketAssignment(enableTicketAssignment) {
            this.enableTicketAssignment = enableTicketAssignment;
            this.saveToLocalStorage();
        },

        // Save the entire state to localStorage
        saveToLocalStorage() {
            localStorage.setItem('notification-preference', JSON.stringify(this.$state));
        },

        // Load the state from localStorage
        loadFromLocalStorage() {
            const savedState = localStorage.getItem('notification-preference');
            if (savedState) {
                const parsedState = JSON.parse(savedState);
                Object.assign(this.$state, parsedState);
            }
        },
    },
});

useNotificationPreferenceStore.loadFromLocalStorage();
