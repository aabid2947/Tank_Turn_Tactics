import Board  from "../models/Board.model.js"

export const createBoard = (req,res)=>{
    try {
        const Board = Board.create(req.body)
        res.status(200).json(Board)
    }
    catch(e){
        res.status(500).json({ message: e.message })
    }
}

export const deleteBoard =async (req,res) =>{
    try{
        // get id of the user 
        const {id} = req.params
        const user = await Board.findByIdAndDelete(id)

        if(!user){
            res.status(400).json({message:"User not found"})
        }

        res.status(200).json({message:"User deleted succesfully"})
    }
    catch(e){
        res.status(400).json({message:e.message})

    }
}

