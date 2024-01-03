import {reactive} from 'vue'
export const user = reactive({    
        salutation: '',
        firstName: '',
        lastName: '',
        age: 0,
        expectedAge: 0,
        isSet: false
    })
export const asset = reactive({
        Cash: 0,
        Investment: 0,
        RealEstate: 0,
        Business: 0,
        OtherAsset: 0,
        Mortgage: 0,
        StudentLoan: 0,
        CreditCard: 0,
        OtherLiability: 0,
        FreeEquity: 0,
    })
export const income = reactive(
    [
        {
        StageIndex: 1,
        StartAge: 0,
        EndAge: 0,
        IncomeDependent: 0,
        IncomeSelfEmploy: 0,
        IncomeRenting: 0,
        IncomeOther: 0,
        ExpenseTax: 0,
        ExpenseDailyLife: 0,
        ExpenseMaintenance: 0,
        ExpenseOther: 0,
    }])
