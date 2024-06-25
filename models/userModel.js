const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName:{
        type :String,
        required:true,
        minLength:3,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    },
    lastName:{
        type :String,
        required:true,
        maxLength:50,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
        
    },
    email:{
        type :String,
        unique:true,
        required:true,
        minLength:3,
        maxLength:20,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    },
    password:{
        type :String,
        require:true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    },
    
})

module.exports = mongoose.model("users",userSchema)

