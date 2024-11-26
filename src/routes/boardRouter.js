const express=require('express');
const boardRouter=express.Router();
const { createBoard, getAllBoards, getBoards, deleteBoards, updateBoards,getAllBoardsOfInstitute} = require('../controllers/boardController');

boardRouter.post('/',createBoard);
boardRouter.get('/',getAllBoards);   
boardRouter.get('/:boardId',getBoards);
boardRouter.delete('/:boardId',deleteBoards);
boardRouter.patch('/:boardId',updateBoards);
boardRouter.get('/institute/:instituteId',getAllBoardsOfInstitute);

module.exports=boardRouter