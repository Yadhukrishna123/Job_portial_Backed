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
        required:true,
        unique:true,
        
       
        
        
    },
    password:{
        type :String,
        require:true,
       
    },
    
})

module.exports = mongoose.model("users",userSchema)

