import { defineStore } from 'pinia';
import { TicketsService } from '@/Services/TicketsService';

export const useTicketFilterStore = defineStore({
    id: 'ticketFilter',
    state: () => ({
        filter: {
            status: 'all',
            priority: 'all',
            technician: 'all',
            category: 'all',
            title: '',
            date: '',
        },
        tickets : [],
    }),
    getters: {
        async getTickets() {
            this.tickets = (await TicketsService.getTickets()).data;
            return this.filterTickets();
        },
    },
    actions: {

        handleFilterChange(filterName, value) {
            this.filter[filterName] = value;
            this.filterTickets();
        },

        handleFilterReset() {
            this.filter = {
                status: 'all',
                priority: 'all',
                technician: 'all',
                title: '',
                createdDate: '',
                closedDate: '',
            };
        },
        filterTickets () {
            console.log(this.tickets)
            return this.tickets.filter(ticket => {
                if(this.filter.status !== 'all' && ticket.status.status_name !== this.filter.status) {
                    return false;
                }
                if(this.filter.priority !== 'all' && ticket.priority.priority_name !== this.filter.priority) {
                    console.log(ticket.priority, this.filter.priority)
                    return false;
                }
                if(this.filter.technician !== 'all' && ticket.technician !== this.filter.technician) {
                    return false;
                }
                if(this.filter.title && !ticket.title.includes(this.filter.title)) {
                    return false;
                }
                if(this.filter.category !== 'all' && ticket.category.category_name !== this.filter.category) {
                    return false;
                }
                return !(this.filter.date && ticket.createdDate !== this.filter.date);

            })
        }
    },
});