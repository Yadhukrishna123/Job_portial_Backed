const express = require("express")
const app = express();
const cookieParser = require("cookie-parser")

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use(cookieParser())

const sampleMiddleware = (req,res,next)=>{
    console.log("middleware");
    next()
}

app.use(sampleMiddleware); 

module.exports = app