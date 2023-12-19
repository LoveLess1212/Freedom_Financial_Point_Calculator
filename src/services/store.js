import {reactive} from 'vue'

export const store = reactive({
    user: {
        salutation: '',
        firstName: '',
        lastName: '',
        age: 0,
        expectedAge: 0,
    },
    Balance:{
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
    },
    Stage:[{
        StageIndex: 1,
        StartAge: 0,
        EndAge: 0,
        Income: {
            Dependent: 0,
            SelfEmploy: 0,
            Renting: 0,
            Other: 0,
        },
        Expense: {
            Tax: 0,
            DailyLife: 0,
            Maintenance: 0,
            Other: 0,
        },
    }]
})