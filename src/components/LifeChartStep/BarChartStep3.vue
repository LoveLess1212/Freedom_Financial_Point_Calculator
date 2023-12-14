<template>
  <Bar :data="dataChart" :options="chartOptions" />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
export default {
  components: { Bar },
  props: {
    dataChart: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chartOptions : {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            stacked: true,
            ticks: {
              color: 'black',
              font: {
                size: 16
              }
            },
            grid: {
              display: false
            }
          },
          y: {
            stacked: true,
            ticks: {
              color: 'black',
              font: {
                size: 16
              }
            },
            grid: {
              display: false
            }
          }
        },
        plugins: {
          title: {
            display: true,
            text: 'Income & Expense',
            color: 'black',
            font: {
              size: 20
            }
          },
          legend: {
            position: 'bottom',
            labels: {
              color: 'black',
              fontSize: 16,
              padding: 20
            }
          },
          // tooltip: {
          //   callbacks: {
          //     label: function(tooltipItem, data) {
          //       var dataset = data.datasets[tooltipItem.datasetIndex];
          //       var meta = dataset._meta[Object.keys(dataset._meta)[0]];
          //       var total = meta.total;
          //       var currentValue = dataset.data[tooltipItem.index];
          //       var percentage = parseFloat(((currentValue/total) * 100).toFixed(1));
          //       return currentValue + ' (' + percentage + '%)';
          //     },
          //     title: function(tooltipItem, data) {
          //       return data.labels[tooltipItem[0].index];
          //     }
          //   }
          // }
        }
      }
        
    }
  },
  computed: {

  },
  mounted() {

  }
}
</script>
