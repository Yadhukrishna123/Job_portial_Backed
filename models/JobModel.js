const mongoose = require("mongoose")

const newJobsSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
    companyName:{
        type:String,
        require:true,
    },
    experience:{
        type:String,
        require:true,
    },
    qualification:{
        type:String,
        require:true,
    },
    salary:{
        type:String,
        require:true,
    },
    location:{
        type:String,
        require:true,
    },
})
module.exports = mongoose.model("Jobs",newJobsSchema)