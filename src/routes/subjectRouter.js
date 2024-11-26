const express=require('express');
const subjectRouter=express.Router();
const {createSubject,getAllSubjects,getSubject,deleteSubject,updateSubject } = require('../controllers/subjectController');

subjectRouter.post('/',createSubject);
subjectRouter.get('/',getAllSubjects);   
subjectRouter.get('/:subjectId',getSubject);
subjectRouter.delete('/:subjectId',deleteSubject);
subjectRouter.patch('/:subjectId',updateSubject);

module.exports=subjectRouter