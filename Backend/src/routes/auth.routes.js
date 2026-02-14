const express = require("express")
const userModel = require("../models/user.model")
const authRouter = express.Router()
const crypto = require("crypto")

authRouter.post('/register',async(req,res)=>{
    const {username , email , password , bio , proflieImage} = req.body
    
    const isUserExist = await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
    })

    if(isUserExist){
        return res.status(409)
        .json({
            message:"user already exists" + (isUserExist.email == email ? "since Email already exists" : "username already exists")
        })
    }

    const hash = crypto.createHash('sha256').update(password).digest('hex')



 
})