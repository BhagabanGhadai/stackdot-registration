const express=require('express');
const mediumRouter=express.Router();
const { createMedium, getAllMediums, getMediums, deleteMediums, updateMediums,getAllMediumsOfBoard} = require('../controllers/studyMediumConroller');

mediumRouter.post('/',createMedium);
mediumRouter.get('/',getAllMediums);   
mediumRouter.get('/:mediumId',getMediums);
mediumRouter.delete('/:mediumId',deleteMediums);
mediumRouter.patch('/:mediumId',updateMediums);
mediumRouter.get('/board/:boardId',getAllMediumsOfBoard);

module.exports=mediumRouter