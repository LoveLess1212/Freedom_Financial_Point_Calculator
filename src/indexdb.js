import express, { json } from 'express'
import { connect, Schema, model } from 'mongoose'
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

const UserSchema = new Schema({
    salution: String,
    FirstName: String,
    Birth:Date,
    LastName: String,
    age: Number,
    ExpectedAge:Number,
    Cash:Number,
    Investment:Number,
    RealEstate: Number,
    Business:Number,
    OtherAsset:Number,
    Mortgage:Number,
    StudentLoan:Number,
    CreditCard:Number,
    OtherLiabilities:Number,
    
})

const UserModel = model("invest", UserSchema)

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