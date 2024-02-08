<template>
    <Doughnut id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>
  
<script>
import { DashboardService } from '@/Services/DashboardService.js'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)
// TODO : Fazer seeder no backend para dps por a usar o service
export default {
    components: { Doughnut },
    data() {
        return {
            chartData: {
                labels: [],
                datasets: [
                    {
                        backgroundColor: [],
                        data: []
                    }
                ]
            },
            chartOptions: { responsive: true, maintainAspectRatio: false }
        }
    },
    async mounted() {
        const response = await DashboardService.getTicketsByStatus();
        if (response.success) {
            const data = response.data.sort((a, b) => a.status - b.status).map(item => item.total);
            const labels = response.data.map(item => item.status_name);
            this.chartData = {
                labels: labels,
                datasets: [
                    {
                        backgroundColor: ['#41B883', '#00D8FF', '#E46651'],
                        data: data
                    }],
            };
        } else {
            console.error(response.message);
        }
    }
}
</script>
  