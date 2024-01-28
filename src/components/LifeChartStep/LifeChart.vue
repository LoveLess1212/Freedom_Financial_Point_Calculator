<style scoped></style>
<script>
import { user, asset, income } from "../../services/store.js";
import LineChart from "./LineChart.vue";

export default {
  name: "LifeChart",
  components: {LineChart},
  props: {
    riseinmoney: {
      type: Number,
      required: true
    },
    inflation: {
      type: Number,
      required: true
    }
  },
  methods: {
    SavingRiseExpected() {
      console.log("SavingRiseExpected")
      let ageLeft = user.expectedAge - user.age;
      let Saving = new Array(ageLeft);
      for (let k = 0; k < income.length; k++) {
        let stage = income[k];
  
        let revenue = parseInt(stage.IncomeDependent) +
            parseInt(stage.IncomeSelfEmploy) +
            parseInt(stage.IncomeRenting) +
            parseInt(stage.IncomeOther) -
            parseInt(stage.ExpenseTax) -
            parseInt(stage.ExpenseDailyLife) -
            parseInt(stage.ExpenseMaintenance) -
            parseInt(stage.ExpenseOther);
        if (k === 0) {
          Saving[0] = parseInt(asset.FreeEquity) + revenue;

        }
        for (let i = parseInt(stage.StartAge) - parseInt(user.age) ; i < parseInt(stage.EndAge) - parseInt(user.age); i++) {

          if (i > 0) {
            Saving[i] = (Saving[i - 1]+ revenue) * (1 + parseFloat(this.riseinmoney)) ;
          }
        }
      }
      return Saving;
    },
    MoneyNeed() {
      let ageLeft = user.expectedAge - user.age;
      let MoneyNeed = new Array(ageLeft);
      let last = parseInt(income[income.length - 1].ExpenseTax) +
          parseInt(income[income.length - 1].ExpenseDailyLife) +
          parseInt(income[income.length - 1].ExpenseMaintenance) +
          parseInt(income[income.length - 1].ExpenseOther);


      MoneyNeed[ageLeft - 1] = last * Math.pow((1 + parseFloat(this.inflation)), ageLeft);

      for (let i = income.length - 1; i >= 0; i--) {
        let stage = income[i];
        let expense = parseInt(stage.ExpenseTax) + parseInt(stage.ExpenseDailyLife) + parseInt(stage.ExpenseMaintenance) + parseInt(stage.ExpenseOther);

        for (let j = parseInt(stage.EndAge) - parseInt(user.age) - 1; j >= parseInt(stage.StartAge) - parseInt(user.age); j--) {
          if (j < ageLeft - 1) {
            MoneyNeed[j] = MoneyNeed[j + 1] + Math.pow(1 + parseFloat(this.inflation), j+1) * expense; // check this to see if the math pow is coorect
          }
        }
      }

      return MoneyNeed;
    },
    FreedomPoint(){
      let ageLeft = user.expectedAge - user.age;
      let Saving = this.SavingRiseExpected();
      let MoneyNeed = this.MoneyNeed();
      let FreedomPoint = new Array(ageLeft);
      let point = 0;
      for(let i = 0; i < ageLeft; i++){
        FreedomPoint[i] = Saving[i] - MoneyNeed[i];
        if (FreedomPoint[i] > 0){
          point = i;
          break;
        }
      }
      return point + user.age;
    },
  },
  data (){
    return{
    }
  },
  computed: {
    dataChart() {
      let ageArray = new Array(user.expectedAge - user.age);
      for (let i = 0; i < ageArray.length; i++) {
        ageArray[i] = user.age + i;
      }
      this.$emit('set-freedom-point', this.FreedomPoint())
      console.log("FreedomPoint: " + this.FreedomPoint())
      return {
        labels: ageArray,
        datasets: [
          {
            label: 'Saving',
            data: this.SavingRiseExpected(),
            backgroundColor: '#00FF00',
            borderColor: '#00FF00',
            pointStyle: 'circle',
            pointRadius: 0
          },
          {
            label: 'Money Need',
            data: this.MoneyNeed(),
            backgroundColor: '#FF0000',
            borderColor: '#FF0000',
            pointStyle: 'circle',
            pointRadius: 0
          }
        ]
      }
    }

  }

}

</script>

<template>
  <LineChart :dataChart="dataChart"/>
</template>

<style scoped></style>