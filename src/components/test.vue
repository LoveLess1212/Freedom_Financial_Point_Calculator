<template>
    <Bar :data="chartData" :options="chartOptions" />
  </template>

  <script>
  import { ref } from "vue";
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  export default {
    extends: Bar,
    components: { Bar },
    data () {
      return {
        data:
      {
        ageStart: ref(1), // this should be the start age that user already specified
        ageEnd: ref(5),
        income: {
          dependent: ref(23),
          selfEmploy: ref(15),
          renting: ref(30),
          other: ref(32),
        },
        expense: {
          tax: ref(12),
          dailyLife: ref(32),
          maintenance: ref(1),
          other: ref(5),
        }
      }
        ,
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }},
    }
  },
  computed :
      {
        chartData(){
          let income= parseInt(this.data.income.dependent) + parseInt(this.data.income.selfEmploy) + parseInt(this.data.income.renting) + parseInt(this.data.income.other)
          console.log(income)
          let expense= parseInt(this.data.expense.tax) + parseInt(this.data.expense.dailyLife) + parseInt(this.data.expense.maintenance) + parseInt(this.data.expense.other)
          let saving= income - expense

          return {
            labels: [ 'income', 'expense', 'saving'],
            datasets: [
              {
                label: [ 'income', 'expense', 'saving'],
                backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16', '#FFCE56'],
                data: [ income, expense, saving]
              }
            ]
          }
        },
}
  }
  </script>