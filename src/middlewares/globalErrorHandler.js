
exports.globalErrorHandler=(err,req,res,next)=>{
    res.status(err.Statuscode).send({status:err.Statuscode,success:false,message:err.message})
}