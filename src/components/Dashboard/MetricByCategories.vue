<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { DashboardService } from '../../Services/DashboardService'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name: 'MetricByCategoriesChart',
    components: { Bar },
    data() {
        return {
            chartData: {
                labels: [],
                datasets: [{
                    label: 'Tempo Médio de Resolução por Categoria',
                    backgroundColor: '#36A2EB',
                    data: []
                }]
            },
            chartOptions: {
                responsive: true
            },
        }
    },
    async mounted() {
        await this.fetchChartData();
    },
    methods: {
        async fetchChartData() {
            try {
                const response = await DashboardService.getMetricsByCategories();
                this.chartData = this.formatChartData(response.data);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        },
        formatChartData(apiData) {
            const labels = [];
            const data = [];

            apiData.forEach(entry => {
                labels.push(entry.category);
                data.push(entry.average_resolution_time);
            });

            return {
                labels: labels,
                datasets: [{
                    label: 'Horas de Resolução Média por Categoria',
                    backgroundColor: '#36A2EB',
                    data: data
                }]
            };
        }
    }
}
</script>


<template>
    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>