import { createBoard, deleteBoard,addTanks, startGame, getAllBoard } from '../controller/Board.controller.js'
import express from 'express'

const router = express.Router()

// create board
router.get('/createBoard',createBoard)

// get all Board
router.get('/getAllBoard',getAllBoard)

//add tank
router.post('/addTank/:id',addTanks)

// start game
router.get('/startGame/:id',startGame)

//delete board
router.delete('/deleteBoard/:id',deleteBoard)

export default router