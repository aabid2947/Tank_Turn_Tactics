const Board = require('../models/')

const createBoard = (req,res)=>{
    try {
        const Board = Board.create(req.body)
        res.status(200).json(Board)
    }
    catch(e){
        res.status(500).json({ message: e.message })
    }
}