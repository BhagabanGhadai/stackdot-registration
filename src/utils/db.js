const mongoose=require('mongoose');
const configs=require('../config/index')

const connectDB=async()=>{
    try{
        await mongoose.connect(configs.DB_URL);
        console.log("Database Connected");
    }catch(err){
        console.log(err);
    }
}
module.exports=connectDB