const express=require('express');
const instituteRouter=express.Router();
const {createInstitute,getAllInstitutes,getInstitutes,deleteInstitutes,updateInstitutes}=require('../controllers/institutionController');

instituteRouter.post('/',createInstitute);
instituteRouter.get('/',getAllInstitutes);   
instituteRouter.get('/:instituteId',getInstitutes);
instituteRouter.delete('/:instituteId',deleteInstitutes);
instituteRouter.patch('/:instituteId',updateInstitutes);

module.exports=instituteRouter