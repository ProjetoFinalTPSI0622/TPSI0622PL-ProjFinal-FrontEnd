import { AxiosService } from "@/Services/AxiosService.js";

export const DashboardService = {

    getTicketsPerDay: async () => {
        return await AxiosService.makeRequest('get', '/dashboard/ticketsPerDay');
    },

    getTicketsPerMonth: async () => {
        return await AxiosService.makeRequest('get', '/dashboard/ticketsPerMonth');
    },

    getTicketsByStatus: async () => {
        return await AxiosService.makeRequest('get', '/dashboard/getStatsByStatus');
    },

    getMetricsByCategories: async () => {
        return await AxiosService.makeRequest('get', '/dashboard/metricByCategories');
    }

}