const mongoose = require("mongoose")

const Schema=mongoose.Schema

const UserSchema= new Schema({
    name:{type:String,maxLength:20,required:true},
    score:{type:Number,required:true}
})

module.exports=mongoose.model("User",UserSchema)