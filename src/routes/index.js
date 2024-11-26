const instituteRouter=require('./instituteRouter');
const boardRouter=require('./boardRouter');
const mediumRouter=require('./mediumRouter');
const classCatrgoryRouter=require('./classCategoryRouter');
const standardRouter=require('./standardRouter');
const subjcetRouter = require('./subjectRouter');
const registrationRouter = require('./registrationRouter');

exports.globalRouter = (app) => {
    //routes
    app.use('/api/v1/institutes',instituteRouter)
    app.use('/api/v1/boards',boardRouter)
    app.use('/api/v1/mediums',mediumRouter)
    app.use('/api/v1/classcategory',classCatrgoryRouter)
    app.use('/api/v1/standards',standardRouter)
    app.use('/api/v1/subjcets',subjcetRouter)
    app.use('/api/v1/registration',registrationRouter)

    //health check
    app.get('/health-check', (req, res) => {
        res.status(200).send({
            status: 200,
            success:true,
            message:"Helath Check Successful"

        })
    })
    //404
    app.use((req,res,next)=>{
        res.status(404).send({
            status:404,
            success:false,
            message:"Page Not Found"
        })
    })
}