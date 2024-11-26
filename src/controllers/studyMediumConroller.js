const mediumModel=require('../models/studyMedium');
const boardModel=require('../models/boardModel');

exports.createMedium=async(req,res)=>{
    try{
        if(!req.body.board) throw new Error("Board Not Found")
        const board=await boardModel.findById(req.body.board);
        if(!board) throw new Error("Board Not Found")
        const medium=await mediumModel.create(req.body);
        res.status(201).send({status:201,success:true,message:"Medium Created Successfully",medium})
    }catch(err){
        res.status(400).send({status:err.Statuscode,success:false,message:err.message})
    }
}

exports.getAllMediums=async(req,res)=>{
    try{
        const mediums=await mediumModel.find({});
        res.status(200).send({status:200,success:true,message:"Mediums Fetched Successfully",mediums})
    }catch(err){
        res.status(400).send({status:err.Statuscode,success:false,message:err.message})
    }
}

exports.getAllMediumsOfBoard=async(req,res)=>{
    try{
        const { boardId }=req.params
        const board=await boardModel.findById(boardId);
        if(!board) throw new Error("Board Not Found")
        const mediums=await mediumModel.find({board:boardId});
        res.status(200).send({status:200,success:true,message:"Mediums Fetched Successfully",mediums})
    }catch(err){
        res.status(400).send({status:err.Statuscode,success:false,message:err.message})
    }
}
exports.getMediums=async(req,res)=>{
    try{
        const { mediumId }=req.params
        const mediums=await mediumModel.findById(mediumId);
        if(!mediums) throw new Error("Medium Not Found")
        res.status(200).send({status:200,success:true,message:"Mediums Fetched Successfully",mediums})
    }catch(err){
        res.status(400).send({status:err.Statuscode,success:false,message:err.message})
    }
}

exports.updateMediums=async(req,res)=>{
    try{
        const { mediumId }=req.params
        const mediums=await mediumModel.findById(mediumId);
        if(!mediums) throw new Error("Medium Not Found")
        if(req.body.board){
            const board=await boardModel.findById(req.body.board);
            if(!board) throw new Error("Board Not Found")
        }
        const updateMedium=await mediumModel.findByIdAndUpdate(mediumId,req.body,{new:true})    
        res.status(200).send({status:200,success:true,message:"Mediums updated Successfully",updateMedium})
    }catch(err){
        res.status(400).send({status:err.Statuscode,success:false,message:err.message})
    }
}

exports.deleteMediums=async(req,res)=>{
    try{
        const { mediumId }=req.params
        const mediums=await mediumModel.findById(mediumId);
        if(!mediums) throw new Error("Medium Not Found")
        const deleteMediums=await mediumModel.findByIdAndDelete(mediumId)
        res.status(204).send({status:204,success:true,message:"Mediums Deleted Successfully",deleteMediums})
    }catch(err){
        res.status(400).send({status:err.Statuscode,success:false,message:err.message})
    }
}