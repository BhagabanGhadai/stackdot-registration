const mongoose=require('mongoose');

const instituationSchema=new mongoose.Schema({
    name:{type:String,required:true}
},{timestamps:true})

module.exports=mongoose.model('instituations',instituationSchema,'instituations')