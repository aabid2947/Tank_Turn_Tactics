import Board  from "../models/Board.model.js"
import { gameTimer } from "../Logic/Board.Logic.js";

export const createBoard = async (req, res) => {
    try {
        const gameGrid = Array.from({ length: 16 }, () => Array.from({ length: 16 }, () => 0));

        const boardID = Math.random().toString(36).substr(2, 9);
        const newBoard = new Board({
            gameGrid: gameGrid,
            boardID: boardID
        });
        await newBoard.save();

        res.status(201).json({ message: "Board created successfully", boardID: boardID,newBoard });
    
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllBoard = async (req, res) => {
    try {
        const boards =await  Board.find({})
        res.status(201).json({ message: "Board created successfully", boards});
    
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const addTanks = async (req, res) => {
    try {
        const { id } = req.params;
        const  player  = req.body; // Assuming you receive player data in the request body
        console.log(req.body)

        // Find the board by its ID
        const board = await Board.findById(id);

        if (!board) {
            return res.status(404).json({ message: "Board not found" });
        }
        if (board.tanks.length >=16) {
            return res.status(400).json({ message: "Maximum number of players reached (16)" });
        }

        // Update the tanks field with the new player data
        board.tanks.push(player);

        // Save the updated board
        await board.save();

        res.status(200).json({ message: "Player added to the board successfully", board: board });
    } catch (error) {
    }
};

export const movesPlayed = (req,res)=>{
    try {
        const board = Board(req,res)
        const Bajji = req.body

        board.moveQueue.push(Bajji)
    } catch (error) {
        res.status(500).json({ message: error.message });

    }
}
 
export const startGame = async (req, res) => {
    try {
        const { id } = req.params;

        // Find the board by its ID
        const board = await Board.findById(id);

        if (!board) {
            return res.status(404).json({ message: "Board not found" });
        }

        // Ensure there are less than 16 tanks on the board
        if (board.tanks.length >= 16) {
            return res.status(400).json({ message: "Board already has maximum number of tanks (16)" });
        }

        for(let i =0;i<board.tanks.length;i++){
            const randomX = Math.floor(Math.random() * 16); // Random X coordinate (0 to 15)
            const randomY = Math.floor(Math.random() * 16); // Random Y coordinate (0 to 15)

            if(  board.gameGrid[randomX][randomY] == 0){
                board.gameGrid[randomX][randomY] = board.tanks[i]
                board.tanks[i].xCoordinate = randomX
                board.tanks[i].yCoordinate = randomY
            }
            else{
                i--;
            }   
        }

        // start timer
        gameTimer(board)

        // save changes to board
        await board.save()
        res.status(200).json({ message: "Tanks distributed randomly on the board", board: board }); 

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


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
































































