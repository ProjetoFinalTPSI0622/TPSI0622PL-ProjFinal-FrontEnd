import { defineStore } from 'pinia';
import { TicketsService } from '@/Services/TicketsService';
import { ref } from 'vue';

export const useTicketFilterStore = defineStore({
    id: 'ticketFilter',
    state: () => ({
        filter: {
            user: 'all',
            technician: 'all',
            category: 'all',
            priority: 'all',
            status: 'all',
            title: '',
            createdDate: '',
            closedDate: '',
            searchTerm: '',
        },
        tickets: [],
        sideFilterChange: ref(0),
        selectedSideFilter: null,
    }),
    getters: {

        filteredTickets() {
            return this.filterTickets(this.tickets);
        },
    },
    actions: {
        async getTickets() {
            this.tickets = (await TicketsService.getTickets()).data;
            return this.tickets;
        },

        handleFilterChange(filterName, value) {
            this.filter[filterName] = value;
        },

        handleSideFilterChange() {
            this.sideFilterChange++;
        },

        resetSideFilter() {
            this.selectedSideFilter = null;
        },

        handleFilterReset() {
            this.filter = {
                user: 'all',
                technician: 'all',
                category: 'all',
                priority: 'all',
                status: 'all',
                title: '',
                createdDate: '',
                closedDate: '',
                searchTerm: '',
            };
        },
        filterTickets(tickets) {
            const filteredTickets = tickets.filter(ticket => {
                const searchTermLower = this.filter.searchTerm.toLowerCase();
                if (this.filter.searchTerm &&
                    !ticket.createdby?.name.toLowerCase().includes(searchTermLower) &&
                    !ticket.title.toLowerCase().includes(searchTermLower) &&
                    !ticket.createdby?.email.toLowerCase().includes(searchTermLower) &&
                    !ticket.assignedto?.email.toLowerCase().includes(searchTermLower) &&
                    !(ticket.assignedto?.name.toLowerCase() || '').includes(searchTermLower) &&
                    !ticket.status.name.toLowerCase().includes(searchTermLower)) {
                    return false;
                }

                if (this.filter.user !== 'all' && ticket.createdby && !this.filter.user.includes(ticket.createdby.name)) {
                    return false;
                }
                if ((this.filter.technician !== 'all' && ticket.assignedto && !this.filter.technician.includes(ticket.assignedto.name)) || (this.filter.technician !== 'all' && !ticket.assignedto)) {
                    return false;
                }
                if (this.filter.category !== 'all' && !this.filter.category.includes(ticket.category.name)) {
                    return false;
                }
                if (this.filter.priority !== 'all' && !this.filter.priority.includes(ticket.priority.name)) {
                    return false;
                }
                if (this.filter.status !== 'all' && !this.filter.status.includes(ticket.status.name)) {
                    return false;
                }
                if (this.filter.title && !ticket.title.includes(this.filter.title)) {
                    return false;
                }
                if (this.filter.createdDate && new Date(ticket.created_at).toDateString() !== new Date(this.filter.createdDate).toDateString()) {
                    return false;
                }

                return true;
            });
            return filteredTickets;
        }
    },
});