import { createBoard, deleteBoard } from '../controller/Board.controller.js'
import express from 'express'

const router = express.Router()

// create board
router.post('/createBoard',createBoard)

//delete board
router.delete('/deleteBoard',deleteBoard)

export default router