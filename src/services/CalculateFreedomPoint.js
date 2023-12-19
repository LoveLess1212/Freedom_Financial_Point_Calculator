import {store} from './store.js'

let freedomPoint = 0;
let ageLeft = store.user.expectedAge - store.user.age;
let inflation = 0.02;
let Saving = new Array(ageLeft);
let StageIndex = new Array(ageLeft);
for (stage in store.Stage){
    for (let i = store.Stage[stage].StartAge; i < store.Stage[stage].EndAge; i++){
        StageIndex[i] = store.Stage[stage].StageIndex;
    }
};
Saving[0] = store.Balance.FreeEquity;
for (stage in store.Stage){
    let revenue = store.Stage[stage].Income.Dependent + store.Stage[stage].Income.SelfEmploy + store.Stage[stage].Income.Renting + store.Stage[stage].Income.Other - store.Stage[stage].Expense.Tax - store.Stage[stage].Expense.DailyLife - store.Stage[stage].Expense.Maintenance - store.Stage[stage].Expense.Other;
    for (let i = store.Stage[stage].StartAge; i < store.Stage[stage].EndAge; i++){
        Saving[i] = Saving[i-1] + revenue;
    }
}
let MoneyNeeded = new Array(ageLeft+1);
// MoneyNeeded[ageLeft-1] = (store.Stage[store.Stage.length-1].Expense.Tax + store.Stage[store.Stage.length-1].Expense.DailyLife + store.Stage[store.Stage.length-1].Expense.Maintenance + store.Stage[store.Stage.length-1].Expense.Other)*(1+inflation)^ageLeft ;
MoneyNeeded[ageLeft] = 0;
for (let i = ageLeft-1; i >= 0; i--){
    MoneyNeeded[i] = MoneyNeeded[i+1] + (store.Stage[StageIndex[i]-1].Expense.Tax + store.Stage[StageIndex[i]-1].Expense.DailyLife + store.Stage[StageIndex[i]-1].Expense.Maintenance + store.Stage[StageIndex[i]-1].Expense.Other)*(1+inflation)^i;
}

for (let i = 0; i < ageLeft; i++){
    if (Saving[i] >= MoneyNeeded[i]){
        freedomPoint = i;
        break;
    }
}