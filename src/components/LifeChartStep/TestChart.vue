<template>
    <Pie :data="chartData" :options="chartOptions"/>
</template>
<script>
    import { Pie } from 'vue-chartjs'
    import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
    ChartJS.register(ArcElement, Tooltip, Legend)
    export default {
        name: 'BarChart',
        components: { Pie },
        data() {
            return {
                chartOptions: {
                    responsive: true,
                    maintainAspectRatio: false,
                    legend: {
                        position: 'bottom',
                        labels: {
                            fontColor: 'white',
                            fontSize: 16,
                            padding: 20
                        }
                    },
                    // tooltips: {
                    //     callbacks: {
                    //         label: function(tooltipItem, data) {
                    //             var dataset = data.datasets[tooltipItem.datasetIndex];
                    //             var meta = dataset._meta[Object.keys(dataset._meta)[0]];
                    //             var total = meta.total;
                    //             var currentValue = dataset.data[tooltipItem.index];
                    //             var percentage = parseFloat(((currentValue/total) * 100).toFixed(1));
                    //             return currentValue + ' (' + percentage + '%)';
                    //         },
                    //         title: function(tooltipItem, data) {
                    //             return data.labels[tooltipItem[0].index];
                    //         }
                    //     }
                    // }
                },
                chartData:{
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [{
                        label: 'My First Dataset',
                        data: [300, 50, 100, 40, 120, 24],
                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 205, 86)',
                            'rgb(75, 192, 192)',
                            'rgb(153, 102, 255)',
                            'rgb(255, 159, 64)'
                        ],
                        hoverOffset: 4
                    }]
                }
            }
        },
       
    }
</script>