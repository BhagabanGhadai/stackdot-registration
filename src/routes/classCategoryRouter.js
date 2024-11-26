const express=require('express');
const classCategoryRouter=express.Router();
const { createClassCategory,getAllClassCategory,getClassCategory,deleteClassCategory,updateClassCategory }=require('../controllers/classcategoryController');

classCategoryRouter.post('/',createClassCategory);
classCategoryRouter.get('/',getAllClassCategory);   
classCategoryRouter.get('/:classCategoryId',getClassCategory);
classCategoryRouter.delete('/:classCategoryId',deleteClassCategory);
classCategoryRouter.patch('/:classCategoryId',updateClassCategory);

module.exports=classCategoryRouter