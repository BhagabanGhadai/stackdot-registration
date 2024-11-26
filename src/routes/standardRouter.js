const express=require('express');
const standardRouter=express.Router();
const { createStandard, getAllStandards, getStandard, deleteStandard, updateStandard } = require('../controllers/standradController');

standardRouter.post('/',createStandard);
standardRouter.get('/',getAllStandards);   
standardRouter.get('/:standardId',getStandard);
standardRouter.delete('/:standardId',deleteStandard);
standardRouter.patch('/:standardId',updateStandard);

module.exports=standardRouter