import { defineStore } from 'pinia';
import { TicketsService } from '@/Services/TicketsService';

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
        },
        tickets: [],
    }),
    getters: {
        async getTickets() {
            const allTickets = (await TicketsService.getTickets()).data;
            this.tickets = allTickets;
            return this.tickets;
        },
        filteredTickets() {
            return this.filterTickets(this.tickets);
        },
    },
    actions: {

        handleFilterChange(filterName, value) {
            this.filter[filterName] = value;
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
            };
        },
        filterTickets(tickets) {

            const filteredTickets = tickets.filter(ticket => {
                if (this.filter.user !== 'all' && !this.filter.user.includes(ticket.createdby.name)) {
                    return false;
                }
                if (this.filter.technician !== 'all' && ticket.assignedto && !this.filter.technician.includes(ticket.assignedto.name)) {
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