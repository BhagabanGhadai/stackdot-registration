const mongoose=require('mongoose');

const studyMediumSchema=new mongoose.Schema({
    board:{type:mongoose.Schema.Types.ObjectId,ref:'boards',required:true},
    name:{type:String,required:true}
},{timestamps:true})

module.exports=mongoose.model('medium',studyMediumSchema,'medium')