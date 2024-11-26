const mongoose=require('mongoose');

const classSchema=new mongoose.Schema({
    institute:{type:mongoose.Schema.Types.ObjectId,ref:'instituations',required:true},
    name:{type:String,required:true}
},{timestamps:true})

module.exports=mongoose.model('class-category',classSchema,'class-category')