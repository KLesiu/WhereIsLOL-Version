const express = require("express")
const mongoose=require("mongoose")
let bodyParser = require("body-parser")
require("dotenv").config()
let user = require("./routes/user")
const cors= require("cors")

// Mongoose connection
mongoose.set("strictQuery",false)
const mongoDB = `mongodb+srv://kubaxl222:${process.env.DATA_BASE_PASS}@cluster0.k2dffh8.mongodb.net/?retryWrites=true&w=majority`

main().catch((err)=>{
    console.log(err)
})
async function main(){
    await mongoose.connect(mongoDB)
}

const app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())

app.use('/api',user)

app.listen(3001,()=>{
    console.log('Server starts at port 3001')
})
