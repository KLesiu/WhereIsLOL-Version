const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler")
const User = require("../models/User.js")

exports.create=[
    body("name","Name is required").trim().isLength({min:1}).escape(),
    asyncHandler(async(req,res,next)=>{
        const errors= validationResult(req)
        if(!errors.isEmpty()){
            return res.status(404).send({
                errors: errors.array()
            })
        }
        const name = req.body.name
        const score = req.body.score
        const user= new User({
            name:name,
            score:score
        })
        await user.save()
        res.status(200).send({msg:"Score saved!"})

    })
]

exports.get_leaderboard=async(req,res,next)=>{
    const Leaderboard = await User.find().exec()
    const count = await User.count()
    if(count==0) return res.status(404).json("We dont have any scores!")
    return res.status(200).json(Leaderboard)

}