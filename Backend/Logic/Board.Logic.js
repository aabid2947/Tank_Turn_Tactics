import { get } from "mongoose"

// Start game Timer
export  const  gameTimer =async (board)=>{
    try {
        while(!gameOver){
            const timeInterval = setInterval(()=>{
            increaseEnergy(board)
            resolveMove()

            },600000)
        }
    } catch (error) {
        return error
    }
}

// Increase player energy 
const increaseEnergy =async (board)=>{
    try {
        board.tanks.forEach((player)=>{
            player.energy = player.energy + 1
            
        })

        await board.save()   
        return true
    } catch (error) {
        return error
    }
}

//Resolve Move
export const resolveMove = (board)=>{
    //const Bajji: {
       // action:""
       // xCorToPlay:0
       // yCorToPlay:0
       // tankId:""
       // targetId:""
   // }
   try {
        board.moveQueue.forEach((Bajji)=>{
           if(Bajji.action == "Move"){
               moveTank(board,Bajji)
           }
           else if(Bajji.action == "Shoot"){
               shootTank()
           }
           else if(Bajji.action == "Transfer"){
               transferEnergy()
           }
           else if(Bajji.action == "Upgrade"){
               upgradeRange(board)
           }
       })
       return true

   } catch (error) {
       return error
   }
}

// get tank
export const getTank = async (board,Bajji)=>{
    try {
        board.tanks.forEach((player)=>{
            if(player.id == Bajji.tankId){
                tank = player
            } 
        })
    } catch (error) {
        return error
    }
}
// move tank
export const moveTank=async (board,Bajji) =>{
    try {
        const tank = getTank(board,Bajji)
        
        const valid_moves = possibleMoves(board.gameGrid,tank.xCoordinate,tank.yCoordinate)

        valid_moves.forEach((pos)=>{
            if(pos[0] == Bajji.xCor && pos[1] == Bajji.yCor){
                tank.xCoordinate = Bajji.xCor
                tank.yCoordinate = Bajji.yCor
            }
        })
        await board.save()
    } catch (error) {
        return error
    }
}

export const possibleMoves = (Board, positionX, positionY) => {
    if (Board[positionX][positionY] != 0) return
    let valid_moves = []
    let all_possible_moves = [
        [positionX - 1, positionY + 0], [positionX - 1, positionY + 1], [positionX + 0, positionY + 1], [positionX + 1, positionY + 1],
        [positionX + 1, positionY + 0], [positionX + 1, positionY - 1], [positionX + 0, positionY - 1], [positionX - 1, positionY - 1],
    ]

    all_possible_moves.forEach((Move) => {
        let moveX = Move[0]
        let moveY = Move[1]
        if (moveY < 16 && moveX < 16) {
            if (moveY >= 0 && moveX >= 0) {
                if (Board != 't') {
                    valid_moves.push(Move)

                }
            }
        }
    })
    return valid_moves

}


export const upgradeRange = async(board,Bajji) =>{
    try {
        const tank = getTank(board,Bajji)
        const costLookup = {
            2:3,
            3:4,
            4:6,
            5:7
        }
        if(tank.range in costLookup && tank.energy >=costLookup[tank.range] ){
            tank.range++
            tank.energy -= costLookup[tank.range]
        }
        else if(tank.energy >= 7){
            tank.range++
            tank.energy -= 7
        }

    } catch (error) {
        return error
    }
}