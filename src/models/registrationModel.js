const mongoose=require('mongoose');

const userRegistrationSchema=new mongoose.Schema({
    name:{type:String,required:true},
    institue:{type:mongoose.Schema.Types.ObjectId,ref:'instituations',required:true},
    board:{type:mongoose.Schema.Types.ObjectId,ref:'boards',required:true},
    standard:{type:mongoose.Schema.Types.ObjectId,ref:'standards',required:true},
    subject:[{type:mongoose.Schema.Types.ObjectId,ref:'subjcets',required:true}],
    medium:{type:mongoose.Schema.Types.ObjectId,ref:'medium',required:true},
    class:{type:mongoose.Schema.Types.ObjectId,ref:'class-category',required:true},
},{timestamps:true})

module.exports=mongoose.model('user-registration',userRegistrationSchema,'user-registration')