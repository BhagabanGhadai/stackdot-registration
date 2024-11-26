const mongoose=require('mongoose');

const standardSchema=new mongoose.Schema({
    class:{type:mongoose.Schema.Types.ObjectId,ref:'class-category',required:true},
    name:{type:String,required:true}
},{timestamps:true})

module.exports=mongoose.model('standards',standardSchema,'standards')