const standardModel=require('../models/standardModel');
const classCategoryModel=require('../models/classModel');

module.exports.createStandard=async(req,res)=>{
    try{
        if(!req.body.class) throw new Error("Class Not Found");
        const classCategory=await classCategoryModel.findById(req.body.class);
        if(!classCategory) throw new Error("Class Not Found");
        const standard=await standardModel.create(req.body);
        res.status(201).send({status:201,success:true,message:"Standard Created Successfully",standard})
    }catch(err){
        res.status(400).send({status:err.Statuscode,success:false,message:err.message})
    }
}

module.exports.getAllStandards=async(req,res)=>{
    try{
        const standards=await standardModel.find();
        res.status(200).send({status:200,success:true,message:"Standards Fetched Successfully",standards})
    }catch(err){
        res.status(400).send({status:err.Statuscode,success:false,message:err.message})
    }
}

module.exports.getStandard=async(req,res)=>{
    try{
        const { standardId }=req.params
        const standard=await standardModel.findById(standardId);
        if(!standard) throw new Error("Standard Not Found");
        res.status(200).send({status:200,success:true,message:"Standard Fetched Successfully",standard})
    }catch(err){
        res.status(400).send({status:err.Statuscode,success:false,message:err.message})
    }
}

module.exports.updateStandard=async(req,res)=>{
    try{
        const { standardId }=req.params
        const standard=await standardModel.findById(standardId);
        if(!standard) throw new Error("Standard Not Found");
        if(req.body.class){
            const classCategory=await classCategoryModel.findById(req.body.class);
            if(!classCategory) throw new Error("Class Not Found");
        }
        const updateStandard=await standardModel.findByIdAndUpdate(standardId,req.body,{new:true});
        res.status(200).send({status:200,success:true,message:"Standard Updated Successfully",updateStandard})
    }catch(err){
        res.status(400).send({status:err.Statuscode,success:false,message:err.message})
    }
}   

module.exports.deleteStandard=async(req,res)=>{
    try{
        const { standardId }=req.params
        const standard=await standardModel.findById(standardId);
        if(!standard) throw new Error("Standard Not Found");
        const deleteStandard=await standardModel.findByIdAndDelete(standardId);
        res.status(204).send({status:204,success:true,message:"Standard Deleted Successfully",deleteStandard})
    }catch(err){
        res.status(400).send({status:err.Statuscode,success:false,message:err.message})
    }
}   