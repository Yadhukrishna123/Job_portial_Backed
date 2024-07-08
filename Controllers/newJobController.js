const JobModel = require("../models/JobModel");

exports.createJob = async(req,res)=>{
    const {title, description ,companyName,qualification, salary, location, experience} = req.body

    try {
        const job = await JobModel.create({
            title,
            description ,
            companyName, 
            qualification,
            salary, 
            location,
            experience,
        })
        if(!job){
            return res.status(500).json({
                success:false,
                message:"job added faild"
            })
        }
        res.status(201).json({
            success:true,
            message:"job added succesfully",
            job
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }

}

exports.getAllJob = async(req,res) => {
    try {
        const jobs = await JobModel.find()
        if(!jobs){
            return res.status(404).json({
                success:true,
                message:"Jobs not found"
            })
        }
        res.status(200).json({
            successs: true,
            message:"Jobs fatched successfully",
            jobs,
            
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

exports.updateJob = async (req,res)=>{
    const {id} = req.params

    const  {title,companyName,qualification, salary, location, experience} = req.body

    try {
        const job = await JobModel.findById(id)

        if(!job){
            return res.status(404).json({
                success:false,
                message:"job not found!"
            })
        }

        job.title = title,
        job.companyName = companyName,
        job.qualification = qualification,
        job.salary = salary,
        job.location = location,
        job.experience = experience

       await job.save()



        res.status(200).json({
            success:true,
            job,
            message:"job updated successfully"
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }

}

exports.getJob = async (req,res)=>{
    const {id} = req.params

   try {
    const job =await JobModel.findById(id)

    if(!job){
        return res.status(404).json({
            success:true,
            message:"Jobs not found"
        })
    }
    res.status(200).json({
        successs: true,
        job,

    })

   } catch (error) {
    res.status(500).json({
        success:false,
        message:error.message
    })
   }
 
}

exports.deleteJob = async (req,res) => {
    
    const {id} = req.params

    try {
        const job =await JobModel.findByIdAndDelete(id)

        if(!job){
            return res.status(404).json({
                success:false,
                message:"job not found"
            })
        }

        res.status(201).json({
            success:true,
            message:"job Deleted succesfully!"
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

exports.getFilter= async (req,res)=>{
    try {
        const search = await JobModel.find()
        if(!search){
            return res.status(404).json({
                success:true,
                message:"Jobs not found"
            })
        }
        res.status(200).json({
            successs: true,
            message:"Jobs fatched successfully",
            search,
            
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
} 

