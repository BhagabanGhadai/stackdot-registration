const mongoose=require('mongoose');

const boardSchema=new mongoose.Schema({
    institute:{type:mongoose.Schema.Types.ObjectId,ref:'instituations',required:true},
    name:{type:String,required:true}
},{timestamps:true})

module.exports=mongoose.model('boards',boardSchema,'boards')