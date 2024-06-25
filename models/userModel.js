const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName:{
        type :String,
        required:true,
        minLength:3,
    },
    lastName:{
        type :String,
        required:true,
        maxLength:50,
        
    },
    email:{
        type :String,
        unique:true,
        required:true,
        minLength:3,
        maxLength:20
    },
    password:{
        type :String,
        require:true,
    },
    
})

module.exports = mongoose.model("users",userSchema)

