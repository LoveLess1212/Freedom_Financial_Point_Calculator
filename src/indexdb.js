import express, { json } from 'express'
import { connect, Schema, model } from 'mongoose'

const app = express()
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
    // name: String,
    data: Number
})

const UserModel = model("invest", UserSchema)

app.get("/getData",async (req, res) => {
    res.json( await UserModel.find())
})

app.post("/postData", async (req, res) =>{
    let data = new UserModel({data:10});
    const result = await data.save();
    res.json(result)
})

app.listen(5000, async () => {
    await connectDb()
    console.log("Server is running")
})