import { createBoard, deleteBoard } from '../controller/Board.controller.js'

const express = require('express')
const router = express.Router()

// create board
router.post('/createBoard',createBoard)

//delete board
router.delete('/deleteBoard',deleteBoard)

module.expoer = router