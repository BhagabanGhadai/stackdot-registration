const standardModel=require('../models/standardModel');
const subjectModel=require('../models/subjectModel');

exports.createSubject=async(req,res)=>{
    try{ 
        if(!req.body.standard) throw new Error("Standard Not Found")
        const standard=await standardModel.findById(req.body.standard);
        if(!standard) throw new Error("Standard Not Found")
        const subject=await subjectModel.create(req.body);
        res.status(201).send({status:201,success:true,message:"Subject Created Successfully",subject})
    }catch(err){
        res.status(400).send({status:err.Statuscode,success:false,message:err.message})
    }
}

exports.getAllSubjects=async(req,res)=>{
    try{
        const subjects=await subjectModel.find({});
        res.status(200).send({status:200,success:true,message:"Subjects Fetched Successfully",subjects})
    }catch(err){
        res.status(400).send({status:err.Statuscode,success:false,message:err.message})
    }
}

exports.getSubject=async(req,res)=>{
    try{
        const { subjectId }=req.params
        const subject=await subjectModel.findById(subjectId);    
        res.status(200).send({status:200,success:true,message:"Subject Fetched Successfully",subject})
    }catch(err){
        res.status(400).send({status:err.Statuscode,success:false,message:err.message})
    }
}

exports.updateSubject=async(req,res)=>{
    try{
        const { subjectId }=req.params
        const subject=await subjectModel.findById(subjectId);    
        if(!subject) throw new Error("Subject Not Found")
        if(req.body.standard){
            const standard=await standardModel.findById(req.body.standard);
            if(!standard) throw new Error("Standard Not Found")
        }
        const updateSubject=await subjectModel.findByIdAndUpdate(subjectId,req.body,{new:true});    
        res.status(200).send({status:200,success:true,message:"Subject Updated Successfully",updateSubject})
    }catch(err){
        res.status(400).send({status:err.Statuscode,success:false,message:err.message})
    }
}

exports.deleteSubject=async(req,res)=>{
    try{
        const { subjectId }=req.params
        const subject=await subjectModel.findById(subjectId);    
        if(!subject) throw new Error("Subject Not Found")
        const deleteSubject=await subjectModel.findByIdAndDelete(subjectId);    
        res.status(204).send({status:204,success:true,message:"Subject Deleted Successfully",deleteSubject})
    }catch(err){
        res.status(400).send({status:err.Statuscode,success:false,message:err.message})
    }
}