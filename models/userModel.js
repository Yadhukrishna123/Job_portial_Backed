const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName:{
        type :String,
        required:true,
        minLength:3,
        
        serverSelectionTimeoutMS: 30000,  
        socketTimeoutMS: 30000 ,
        trim: true,  
    },
    lastName:{
        type :String,
        required:true,
        maxLength:50,
        
        serverSelectionTimeoutMS: 30000,  
        socketTimeoutMS: 30000  ,
        trim: true,  
        
    },
    email:{
        type :String,
        unique:true,
        required:true,
        minLength:3,
        maxLength:20,
        
        serverSelectionTimeoutMS: 30000,  
        socketTimeoutMS: 30000 ,
        trim: true,   
    },
    password:{
        type :String,
        require:true,
        
        serverSelectionTimeoutMS: 30000,  
        socketTimeoutMS: 30000 ,
        
    },
    
},{ timestamps: true })

module.exports = mongoose.model("users",userSchema)

