const bcrypt = require("bcrypt")
//const { default: mongoose } = require("mongoose")
 const User= require("../models/userModel")
const { getToken } = require("../utils/generateTokon")






exports.signup =async (req,res) =>{
const {firstName, lastName, email, password} = req.body

const hashedPassword =await bcrypt.hash(password,10 ) 

try {
    const user =await User.create({
        firstName,
        lastName,
        email,
        password:hashedPassword
     })
     if(!user){
        return res.status(500).json({
            success:false,
            message:"faild to signup"
        })
           
        
     }
     console.log(user);

     res.status(201).json({
        success:true,
        message:"successfully signup",
        user
     })
} catch (error) {
    return res.status(500).json({
        success:false,
        message:error.message
    })
}
   
    
}


exports.signin = async (req,res)=>{  

    const {email, password} = req.body
    console.log(email, password);
  try {
    const user =await User.findOne({email})

    if(!user){
        return res.status(401).json({
            success:false,
            message:"Invalied credential!"
        })
    }

    const isPassword =await bcrypt.compare(password, user.password)

    if(!isPassword){
        return res.status(401).json({
            success:false,
            message:"Invalied credential!"
        })
    }
    req.user = user 

       getToken(req,res)

    // res.status(200).json({
    //     success:true,
    //     message:"Successfullly Signin!",
    //     user
    // })

  } catch (error) {
    res.status(500).json({
        success:false,
        message:error.message
      })
   }
}


exports.getAllUsers = async (req,res)=>{

    console.log(req.cookies);
      
    try {
        const users =await User.find()
        if(!users){
            return res.status(500).json({
                success:true,
                message:"users not found"
            })
        }
        res.status(200).json({
            successs: true,
            message:"users fatched successfully",
            users,
            
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

exports.getUser = async (req,res)=>{

    const {id} = req.params

    try {
         const user =await User.findById(id)

         if(!user){
            return res.status(404).json({
                success:true,
                message:"Jobs not found"
            })
        }

        res.status(200).json({
            successs: true,
            user,
    
        })

    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
       }
    
}


exports.updateUser = async (req,res)=>{
    const {id} = req.params

    const {firstName, lastName, email} = req.body

    try {
        const user =await User.findById(id)

        if(!user){
            return res.status(404).json({
                success:false,
                message:"user not found"
            })
        }

        user.firstName = firstName
        user.lastName = lastName
        user.email =  email

        user.save()

        res.status(201).json({
            success:true,
            user,
            message:"user updated succesfully"
        })

       

    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

exports.deleteUser = async (req,res) => {
    const {id} = req.params

    try {
        const user =await User.findByIdAndDelete(id)

        if(!user){
            return res.status(404).json({
                success:false,
                message:"user not found"
            })
        }

        
        res.status(201).json({
            success:true,
            message:"user Deleted succesfully!"
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
    

    


