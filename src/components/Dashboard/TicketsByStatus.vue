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
    components: {Doughnut},
    data() {
        return {
            chartData: {
                labels: ['Unassigned', 'Assigned', 'Completed', 'Solved'],
                datasets: [
                    {
                        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                        data: [40, 20, 80, 10]
                    }
                ]
            },
            chartOptions: { responsive: true, maintainAspectRatio: false }
        }
    },
    
}
</script>
  