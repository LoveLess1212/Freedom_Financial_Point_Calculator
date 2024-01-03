/**
 * Component for displaying a pie chart.
 *
 * @component
 * @example
 * <PieChart :chartData="data" />
 *
 * @param {Object} chartData - The data for the pie chart.
 * @param {Object} chartOptions - The options for customizing the pie chart.
 */
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
      /**
       * The options for customizing the pie chart.
       *
       * @type {Object}
       */
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
        tooltips: {
          callbacks: {
            /**
             * Custom label function for the tooltips.
             *
             * @param {Object} tooltipItem - The tooltip item.
             * @param {Object} data - The chart data.
             * @returns {string} The formatted label.
             */
            label: function(tooltipItem, data) {
              var dataset = data.datasets[tooltipItem.datasetIndex];
              var meta = dataset._meta[Object.keys(dataset._meta)[0]];
              var total = meta.total;
              var currentValue = dataset.data[tooltipItem.index];
              var percentage = parseFloat(((currentValue/total) * 100).toFixed(1));
              return currentValue + ' (' + percentage + '%)';
            },
            /**
             * Custom title function for the tooltips.
             *
             * @param {Object} tooltipItem - The tooltip item.
             * @param {Object} data - The chart data.
             * @returns {string} The formatted title.
             */
            title: function(tooltipItem, data) {
              return data.labels[tooltipItem[0].index];
            }
          }
        }
      }
    }
  },
  props: {
    /**
     * The data for the pie chart.
     *
     * @type {Object}
     * @required
     */
    chartData: {
      type: Object,
      required: true
    }
  }
}
</script>