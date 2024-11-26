const boardModel=require('../models/boardModel');
const instituteModel=require('../models/instituationModel');

exports.createBoard=async(req,res)=>{
    try{ 
        if(!req.body.institute) throw new Error("Institute Not Found")
        const institutes=await instituteModel.findById(req.body.institute);
        if(!institutes) throw new Error("Institute Not Found")
        const board=await boardModel.create(req.body);
        res.status(201).send({status:201,success:true,message:"Board Created Successfully",board})
    }catch(err){
        res.status(400).send({status:err.Statuscode,success:false,message:err.message})
    }
}

exports.getAllBoards=async(req,res)=>{
    try{
        const boards=await boardModel.find({});
        res.status(200).send({status:200,success:true,message:"Boards Fetched Successfully",boards})
    }catch(err){
        res.status(400).send({status:err.Statuscode,success:false,message:err.message})
    }
}

exports.getAllBoardsOfInstitute=async(req,res)=>{
    try{
        const { instituteId }=req.params
        const institcute=await instituteModel.findById(instituteId);
        if(!institcute) throw new Error("Institute Not Found")
        const boards=await boardModel.find({institute:instituteId});
        res.status(200).send({status:200,success:true,message:"Boards Fetched Successfully",boards})
    }catch(err){
        res.status(400).send({status:err.Statuscode,success:false,message:err.message})
    }
}
exports.getBoards=async(req,res)=>{
    try{
        const { boardId }=req.params
        const boards=await boardModel.findById(boardId);
        if(!boards) throw new Error("Board Not Found");
        res.status(200).send({status:200,success:true,message:"Boards Fetched Successfully",boards})
    }catch(err){
        res.status(400).send({status:err.Statuscode,success:false,message:err.message})
    }
}

exports.updateBoards=async(req,res)=>{
    try{
        const { boardId }=req.params
        const boards=await boardModel.findById(boardId);
        if(!boards) throw new Error("Board Not Found");
        if(req.body.institute){
            const institcute=await instituteModel.findById(req.body.institute);
            if(!institcute) throw new Error("Institute Not Found")
        }
        const updateBoards=await boardModel.findByIdAndUpdate(boardId,req.body,{new:true})
        res.status(200).send({status:200,success:true,message:"Boards Updated Successfully",updateBoards})
    }catch(err){
        res.status(400).send({status:err.Statuscode,success:false,message:err.message})
    }
}

exports.deleteBoards=async(req,res)=>{
    try{
        const { boardId }=req.params
        const boards=await boardModel.findById(boardId);
        if(!boards) throw new Error("Board Not Found");
        const deleteBoards=await boardModel.findByIdAndDelete(boardId)
        res.status(204).send({status:204,success:true,message:"Boards Deleted Successfully",deleteBoards})
    }catch(err){
        res.status(400).send({status:err.Statuscode,success:false,message:err.message})
    }
}