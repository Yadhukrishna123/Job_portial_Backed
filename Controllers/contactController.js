const ContactInfo = require("../models/contactInfoModel")


exports.ContactDetails = async (req,res)=>{
    const { firstName, lastName, email, state, city, address,  phoneNumber,jobId} = req.body;

    const resume = req.file.path
   

    

    try {
        const contacts = await ContactInfo.create({
            firstName,
            lastName,  
            email, 
            state, 
            city, 
            address, 
            phoneNumber,
            resume,
            jobId
        })
        
        if(!contacts){
            return res.status(501).json({
                success:false,
                message:"faild to submit"
            })
        }
        res.status(201).json({
            success:true,
            message:"successfuly upplyed",
            contacts
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

exports.getAllDetails = async (req, res) => {
    try {
        const details =await ContactInfo.find()
        if(!details){
            return res.status(500).json({
                success:true,
                message:"details not found"
            })
        }
        res.status(200).json({
            successs: true,
            message:"details fatched successfully",
            details,
            
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

exports.getDetails = async (req,res) =>{
    const {id} = req.params

    try {
        const detail =await ContactInfo.findById(id)

        if(!detail){
            return res.status(404).json({
                success:true,
                message:"Detail not found"
            })
        }
        
        res.status(200).json({
            successs: true,
            detail,
    
        })

    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }

}


exports.deleteDetails = async (req, res)=>{
    const {id} = req.params
    try {
        const detaills =await User.findByIdAndDelete(id)

        if(!detaills){
            return res.status(404).json({
                success:false,
                message:"Details not found"
            })
        }
        res.status(201).json({
            success:true,
            message:"Contact Details Deleted succesfully!"
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}