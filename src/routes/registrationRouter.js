const express=require('express');
const registrationRouter=express.Router();
const { createRegistration, getAllRegistration, getRegistration, deleteRegistration, updateRegistration } = require('../controllers/registrationController');

registrationRouter.post('/',createRegistration);
registrationRouter.get('/',getAllRegistration);   
registrationRouter.get('/:registrationId',getRegistration);
registrationRouter.delete('/:registrationId',deleteRegistration);
registrationRouter.patch('/:registrationId',updateRegistration);

module.exports=registrationRouter