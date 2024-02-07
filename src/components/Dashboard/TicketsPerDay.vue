<template>
    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>
  
<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { DashboardService } from '@/Services/DashboardService'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name: 'TicketsPerDayChart',
    components: { Bar },
    data() {
        return {
            chartData: {
                Legend: '',
                labels: [],
                datasets: [{
                    label: '',
                    data: []
                }]
            },
            chartOptions: {
                responsive: true
            },
        }
    },
    async mounted() {
        const response = await DashboardService.getTicketsPerDay();

        const daysOfWeek = {
            'Monday': 0,
            'Tuesday': 0,
            'Wednesday': 0,
            'Thursday': 0,
            'Friday': 0,
            'Saturday': 0,
            'Sunday': 0
        };

        response.data.forEach(d => {
            daysOfWeek[d.day] = d.total;
        });

        this.chartData = {
            labels: Object.keys(daysOfWeek),
            datasets: [{
                label: 'Tickets criados p/dia',
                data: Object.values(daysOfWeek)
            }]
        };
    }
}
</script>
  