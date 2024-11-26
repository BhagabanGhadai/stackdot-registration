const mongoose=require('mongoose');

const subjcetSchema=new mongoose.Schema({
    standard:{type:mongoose.Schema.Types.ObjectId,ref:'standards',required:true},
    name:{type:String,required:true}
},{timestamps:true})

module.exports=mongoose.model('subjcets',subjcetSchema,'subjcets')