const mongoose = require("mongoose")

 const databaseConnection = ()=>{
     mongoose.connect(process.env.DB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,    
        useFindAndModify: false
     })
    .then((data)=>console.log(`Databade connected with ${data.connection.host}`))
    .catch((err)=>console.log(err.message))
}


module.exports=  databaseConnection 