import express, { json } from 'express'
import mongoose, { connect, Schema, model } from 'mongoose'
import cors from 'cors'
// const cors = require('cors')
const app = express()
app.use(cors())

app.use(json())
const connectDb = async () =>{
    try
    {
        await connect('mongodb://127.0.0.1:27017/admin')
    } catch(error){
        console.log("error")
    }
}

var BalanceSchema = new mongoose.Schema({
    // Balance:[mongoose.Schema.Types.Mixed],
    Stage:[mongoose.Schema.Types.Mixed]
});

const schema = new Schema({
    User: {
        salution: String,
        firstName: String,
        lastName: String, 
        age: Number,
        expectedAge:Number,
        isSet: Boolean
    },

    Balance: {
        Cash:Number,
        Investment:Number,
        RealEstate: Number,
        Business:Number,
        OtherAsset: Number,
        Mortgage: Number,
        StudentLoan: Number,
        CreditCard: Number,
        OtherLiability: Number,
        FreeEquity: Number,
    },
    Stage: [{
        StageIndex: Number,
        StartAge: Number,
        EndAge: Number,
        IncomeDependent: Number,
        IncomeSelfEmploy: Number,
        IncomeRenting: Number,
        IncomeOther: Number,
        ExpenseTax: Number,
        ExpenseDailyLife: Number,
        ExpenseMaintenance: Number,
        ExpenseOther: Number,
    }]
    

})

const UserModel = model("invest", schema)

// async function updateData(){
//     const collection = connectDb.collection('invest')
// }


app.get("/getData",async (req, res) => {
    res.json( await UserModel.find())
})

app.post("/postData", async (req, res) =>{
    let any = req.body;
    let data = new UserModel(any);
    const result = await data.save();
    res.json(result)
})

app.listen(5000, async () => {
    await connectDb()
    console.log("Server is running")
})