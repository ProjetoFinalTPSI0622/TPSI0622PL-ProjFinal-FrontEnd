<template>
    <select v-model="groupBy" @change="fetchChartData">
        <option value="day">Diário</option>
        <option value="month">Mensal</option>
    </select>
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
            groupBy: 'day'
        }
    },
    async mounted() {
        await this.fetchChartData();
    },
    methods: {
        async fetchChartData() {
            let response;
            if (this.groupBy === 'day') {
                response = await DashboardService.getTicketsPerDay();
            } else {
                response = await DashboardService.getTicketsPerMonth();
            }
            this.chartData = this.formatChartData(response.data, this.groupBy);
        },
        formatChartData(apiData, groupBy) {
            if (groupBy === 'day') {

                const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                const createdData = daysOfWeek.map(day => {
                    const dayData = apiData.created.find(d => d.day === day);
                    return dayData ? dayData.total : 0;
                });
                const completedData = daysOfWeek.map(day => {
                    const dayData = apiData.completed.find(d => d.day === day);
                    return dayData ? dayData.total : 0;
                });

                return {
                    labels: daysOfWeek,
                    datasets: [
                        {
                            label: 'Tickets Criados',
                            data: createdData,
                            backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        },
                        {
                            label: 'Tickets Completos',
                            data: completedData,
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        }
                    ]
                };
            } else {
                const months = ['Jannuary', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                const createdData = months.map(month => {
                    const monthData = apiData.created.find(m => m.month === month);
                    return monthData ? monthData.total : 0;
                });
                const completedData = months.map(month => {
                    const monthData = apiData.completed.find(m => m.month === month);
                    return monthData ? monthData.total : 0;
                });

                return {
                    labels: months,
                    datasets: [
                        {
                            label: 'Tickets Criados',
                            data: createdData,
                            backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        },
                        {
                            label: 'Tickets Completos',
                            data: completedData,
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        }
                    ]
                };
            }
        }
    }
}
</script>
  