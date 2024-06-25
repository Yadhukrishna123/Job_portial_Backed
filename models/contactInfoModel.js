const mongoose = require("mongoose")

const ContactInfoSchema = new mongoose.Schema({
    firstName:{
        type:String,
        require:true,
    },
    lastName:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    state:{
        type:String,
        require:true,
    },
    city:{
        type:String,
        require:true,
    },
    address:{
        type:String,
        require:true,
    },
    phoneNumber:{
        type:String,
        require:true,
    },
    resume:{
        type:String,
        require:true,
    }

})

module.exports = mongoose.model("Contact information",ContactInfoSchema)