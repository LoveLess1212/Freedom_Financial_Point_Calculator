<script>
import {Line} from 'vue-chartjs'
import {Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale} from 'chart.js'

export default {
  components: {Line},
  props: {
    dataChart: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      options: {
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        stacked: false,
        plugins: {
          title: {
            display: true,
            text: 'Financial Freedom Chart',
          }
        },
        scales: {
          y: {
            type: 'linear',
            display: true,
            position: 'left',
          },
          y1: {
            type: 'linear',
            display: true,
            position: 'right',

            // grid line settings
            grid: {
              drawOnChartArea: false, // only want the grid lines for one axis to show up
            },
          },


        },
        layout: {
          padding: {
            left: 50,
            right: 50,
            top: 50,
            bottom: 50,
          }
        },




      }
    }
  }
}

</script>

<template>
  <Line :data="dataChart" :options="options"/>
</template>

<style scoped>

</style>