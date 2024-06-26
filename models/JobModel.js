const mongoose = require("mongoose")

const newJobsSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        serverSelectionTimeoutMS: 30000,  
        socketTimeoutMS: 30000  
    },
    description:{
        type:String,
        require:true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        serverSelectionTimeoutMS: 30000,  
        socketTimeoutMS: 30000  
    },
    companyName:{
        type:String,
        require:true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        serverSelectionTimeoutMS: 30000,  
        socketTimeoutMS: 30000  
    },
    experience:{
        type:String,
        require:true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        serverSelectionTimeoutMS: 30000,  
        socketTimeoutMS: 30000  
    },
    qualification:{
        type:String,
        require:true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        serverSelectionTimeoutMS: 30000,  
        socketTimeoutMS: 30000  
    },
    salary:{
        type:String,
        require:true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        serverSelectionTimeoutMS: 30000,  
        socketTimeoutMS: 30000  
    },
    location:{
        type:String,
        require:true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        serverSelectionTimeoutMS: 30000,  
        socketTimeoutMS: 30000  
    },
})
module.exports = mongoose.model("Jobs",newJobsSchema)