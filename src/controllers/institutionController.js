const instituteModel=require('../models/instituationModel');
const boardModel=require('../models/boardModel');

exports.createInstitute=async(req,res)=>{
    try{ 
        const institute=await instituteModel.create(req.body);
        res.status(201).send({status:201,success:true,message:"Institute Created Successfully",institute})
    }catch(err){
        res.status(400).send({status:err.Statuscode,success:false,message:err.message})
    }
}


exports.getInstitutes=async(req,res)=>{
    try{
        const { instituteId }=req.params
        const institutes=await instituteModel.findById(instituteId);
        if(!institutes) throw new Error("Institute Not Found")
        res.status(200).send({status:200,success:true,message:"Institutes Fetched Successfully",institutes})
    }catch(err){
        res.status(400).send({status:err.Statuscode,success:false,message:err.message})
    }
}

exports.getAllInstitutes=async(req,res)=>{
    try{
        const institutes=await instituteModel.find();
        res.status(200).send({status:200,success:true,message:"Institutes Fetched Successfully",institutes})
    }catch(err){
        res.status(400).send({status:err.Statuscode,success:false,message:err.message})
    }
}

exports.updateInstitutes=async(req,res)=>{
    try{
        const { instituteId }=req.params
        const institutes=await instituteModel.findById(instituteId);
        if(!institutes) throw new Error("Institute Not Found")
        const updateInstitutes=await instituteModel.findByIdAndUpdate(instituteId,req.body,{new:true})
        res.status(200).send({status:200,success:true,message:"Institutes updated Successfully",updateInstitutes})
    }catch(err){
        res.status(400).send({status:err.Statuscode,success:false,message:err.message})
    }
}

exports.deleteInstitutes=async(req,res)=>{
    try{
        const { instituteId }=req.params
        const institutes=await instituteModel.findById(instituteId);
        if(!institutes) throw new Error("Institute Not Found")
        const [deleteInstitutes,_]=await Promise.all([
            instituteModel.findByIdAndDelete(instituteId),
            boardModel.deleteMany({institute:instituteId})
        ])
        res.status(204).send({status:204,success:true,message:"Institutes Delete Successfully",deleteInstitutes})
    }catch(err){
        res.status(400).send({status:err.Statuscode,success:false,message:err.message})
    }
}