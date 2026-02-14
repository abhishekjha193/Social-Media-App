const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique: [true,"This username already exists , try new name"],
        require:[,"username is required"]
    },
    email:{
        type:String,
        unique:[true,"Email already exists"]
    },
    password:{
        type:String,
        required:[true,"Password is Required"]
    },
    bio:{
        type:String,
        default:"Hey Here , I am Using Instagarm"
    },
    profileImage:{
        type:String,
        default:"https://ik.imagekit.io/me5kodcnuw/user.webp"
    }
})

const userModel = mongoose.model("user",userSchema)

module.exports = userModel