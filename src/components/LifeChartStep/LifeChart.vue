<script>
import { user, asset, income } from "../../services/store.js";

export default {
  name: "LifeChart",
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
      let ageLeft = user.expectedAge - user.age;
      let Saving = new Array(ageLeft);
      // let StageIndex = new Array(ageLeft);
      // for (let stage in income) {
      //   for (let i = 0; i < ageLeft; i++) {
      //     StageIndex[i] = parseInt(stage.StageIndex);
      //   }
      // }
      Saving[0] = parseInt(asset.FreeEquity);
      // console.log("Saving 0: " + Saving[0]);
      for (let k = 0; k < income.length; k++) {
        let stage = income[k];
        // console.log("stage: ");
        console.log(stage);
        let revenue = parseInt(stage.IncomeDependent) + 
                      parseInt(stage.IncomeSelfEmploy) +  
                      parseInt(stage.IncomeRenting) + 
                      parseInt(stage.IncomeOther) - 
                      parseInt(stage.ExpenseTax) - 
                      parseInt(stage.ExpenseDailyLife) - 
                      parseInt(stage.ExpenseMaintenance) - 
                      parseInt(stage.ExpenseOther);
        // console.log("revenue of stage "+k +": "  + revenue);
        // console.log("1+this.riseinmoney: " + (1+this.riseinmoney));
        for (let i = parseInt(stage.StartAge) - parseInt(user.age)+1; i <= parseInt(stage.EndAge)-parseInt(user.age); i++){
          console.log("i: " + i);
          if (i > 0){
            Saving[i] = Saving[i-1]*(1+this.riseinmoney) + revenue;
            // console.log("Saving[i-1]: " + Saving[i-1]);
            // console.log("1+this.riseinmoney: " + (1+this.riseinmoney));
            // console.log("Saving[i-1]*(1+this.riseinmoney)" + Saving[i-1]*(1+this.riseinmoney));
            // console.log("Saving " + i + ": " + Saving[i]);
            // console.log("------------------")
          }
        }
        // console.log(Saving)
        // console.log("------------------")
      
      }
      // for(let i = 0; i < ageLeft; i++){
      //   console.log("type:" + typeof(Saving[i]) )
      //   console.log("data: "+ Saving[i]);  
      // }
      return Saving;
    }, // this start from 1 actually
    MoneyNeed() {
      let ageLeft = user.expectedAge - user.age;
      let MoneyNeed = new Array(ageLeft);
      let last = income[income.length-1].ExpenseTax + income[income.length-1].ExpenseDailyLife + income[income.length-1].ExpenseMaintenance + income[income.length-1].ExpenseOther;
      MoneyNeed[ageLeft-1] = last * Math.pow((1+this.inflation), ageLeft-1);  //check here if the ageleft is correct
      for(let i = income.length-1; i >= 0; i--){
        let stage = income[i];
        let expense = parseInt(stage.ExpenseTax) + parseInt(stage.ExpenseDailyLife) + parseInt(stage.ExpenseMaintenance) + parseInt(stage.ExpenseOther);
        for(let j = parseInt(stage.EndAge)-parseInt(user.age); j >= parseInt(stage.StartAge)-parseInt(user.age); j--){
          if(j < ageLeft-1){
            MoneyNeed[j] = MoneyNeed[j+1]+ Math.pow(1+this.inflation,j) * expense; // check this to see if the math pow is coorect
          }
        }
      }
      return MoneyNeed;
    },
  }
}
</script>

<template>
    <h1> All the saving value</h1>
    <v-btn @click="SavingRiseExpected">Click me</v-btn>
</template>

<style scoped>

</style>