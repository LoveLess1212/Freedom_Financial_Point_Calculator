// Remove unused imports
// import {user} from "./store.js";
// import {asset} from "./store.js";
// import {income} from "./store.js";
export default class CalculateFreedomPoint {
    static calculateSaving(income, asset) { // Fix function declaration
        let ageLeft = user.expectedAge - user.age;
        let Saving = new Array(ageLeft);
        let StageIndex = new Array(ageLeft);
        for (let stage in income) { // Add 'let' keyword
            for (let i = income[stage].StartAge; i < income[stage].EndAge; i++) {
                StageIndex[i] = income[stage].StageIndex;
            }
        }
        Saving[0] = asset.FreeEquity;
        for (let stage in income) { // Add 'let' keyword
            let revenue = income[stage].Income.Dependent + income[stage].Income.SelfEmploy + income[stage].Income.Renting + income[stage].Income.Other - income[stage].Expense.Tax - income[stage].Expense.DailyLife - income[stage].Expense.Maintenance - income[stage].Expense.Other;
            for (let i = income[stage].StartAge; i < income[stage].EndAge; i++) {
                Saving[i] = Saving[i - 1] + revenue;
            }
        }
        return Saving;
    }

    static calculateMoneyNeeded(income,inflation) { // Remove 'inflation' parameter
        let ageLeft = user.expectedAge - user.age;
        let MoneyNeeded = new Array(ageLeft + 1);
        MoneyNeeded[ageLeft] = 0;
        for (let i = ageLeft - 1; i >= 0; i--) {
            MoneyNeeded[i] = MoneyNeeded[i + 1] + (income[StageIndex[i] - 1].Expense.Tax + income[StageIndex[i] - 1].Expense.DailyLife + income[StageIndex[i] - 1].Expense.Maintenance + income[StageIndex[i] - 1].Expense.Other) * Math.pow((1 + inflation), i); // Use 'inflation' instead of 'inflation'
        }
        return MoneyNeeded;
    }

    static calculateFreedomPoint(income, asset) { // Remove 'inflation' parameter
        let freedomPoint = 0;
        let ageLeft = user.expectedAge - user.age;
        let Saving = CalculateFreedomPoint.calculateSaving(income, asset);
        let MoneyNeeded = CalculateFreedomPoint.calculateMoneyNeeded(income);

        for (let i = 0; i < ageLeft; i++) {
            if (Saving[i] >= MoneyNeeded[i]) {
                freedomPoint = i;
                break;
            }
        }

        return freedomPoint;
    }
}