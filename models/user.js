const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        required:true,
        
    }
})

//module.exports = mongoose.model("User",userSchema)
module.exports = mongoose.model("students",userSchema)