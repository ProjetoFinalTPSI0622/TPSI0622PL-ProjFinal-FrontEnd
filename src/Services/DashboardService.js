import { AxiosService } from "@/Services/AxiosService.js";

export const DashboardService = {

    getTicketsPerDay: async () => {
        return await AxiosService.makeRequest('get', '/dashboard/ticketsPerDay');
    },

    getTicketsByStatus: async () => {
        return await AxiosService.makeRequest('get', '/dashboard/getStatsByStatus');
    },

    

}