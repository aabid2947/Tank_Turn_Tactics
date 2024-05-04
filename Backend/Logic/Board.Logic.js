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
        // taking action based on choose action
        board.moveQueue.forEach((Bajji)=>{
           if(Bajji.action == "Move"){
               moveTank(board,Bajji)
           }
           else if(Bajji.action == "Shoot"){
               shootTank(board,Bajji)
           }
           else if(Bajji.action == "TransferEnergy"){
               transferEnergy(board,Bajji)
           }
           else if(Bajji.action == "TransferLife"){
            transferLife(board,Bajji)
        }
           else if(Bajji.action == "Upgrade"){
               upgradeRange(board,Bajji)
           }
       })
       return true

   } catch (error) {
       return error
   }
}

// get tank
export const getTank = async (board,tankId)=>{
    try {
        board.tanks.forEach((player)=>{
            if(player.id == tankId){
                return tank
            } 
        })
    } catch (error) {
        return error
    }
}

// move tank
export const moveTank=async (board,Bajji) =>{
    try {
        // get tank
        const tank = getTank(board,Bajji.tankId)
        
        // getting valid moves
        const valid_moves = possibleMoves(board.gameGrid,tank.xCoordinate,tank.yCoordinate)

        // checking if played move is in valid move or not
        valid_moves.forEach((pos)=>{
            if(pos[0] == Bajji.xCor && pos[1] == Bajji.yCor){
                tank.xCoordinate = Bajji.xCor
                tank.yCoordinate = Bajji.yCor
            }
        })

        // save changes
        await board.save()
    } catch (error) {
        return error
    }
}


// get possible moves
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
                if (Board == 0) {
                    valid_moves.push(Move)

                }
            }
        }
    })
    return valid_moves

}

// shoot the target
export const shootTank = async (board,Bajji) =>{
    try {
        // get tank
        const tank = getTank(board,Bajji.tankId)

        // get target tank
        const enemyTank = getTank(board,Bajji.targetId)

        // calculating the distance between tanks 
        const distance = Math.sqrt(Math.pow((tank.xCoordinate-enemyTank.xCoordinate),2) +  Math.pow((tank.yCoordinate-enemyTank.yCoordinate),2))

        if(tank.range<distance || tank.energy==0){
            return "Not Enough range or energy"
        }
        else if(tank.range >= distance){
            tank.energy--
            enemyTank.life--
        }

        //save changes
        await board.save()


    } catch (error) {
        return error
    }
}

// transfer the targert
export const transferEnergy = async (board,Bajji) =>{
    try {
        // get tank
        const tank = getTank(board,Bajji.tankId)

        // get target tank
        const enemyTank = getTank(board,Bajji.targetId)

        // calculating the distance between tanks 
        const distance = Math.sqrt(Math.pow((tank.xCoordinate-enemyTank.xCoordinate),2) +  Math.pow((tank.yCoordinate-enemyTank.yCoordinate),2))

        if(tank.range<distance || tank.energy==0){
            return "Not Enough range or energy"
        }
        else if(tank.range >= distance){
            tank.energy--
            enemyTank.energy++
        }

        //save changes
        await board.save()


    } catch (error) {
        return error
    }
}

// transfer life
export const transferLife = async (board,Bajji) =>{
    try {
        // get tank
        const tank = getTank(board,Bajji.tankId)

        // get target tank
        const enemyTank = getTank(board,Bajji.targetId)

        // calculating the distance between tanks 
        const distance = Math.sqrt(Math.pow((tank.xCoordinate-enemyTank.xCoordinate),2) +  Math.pow((tank.yCoordinate-enemyTank.yCoordinate),2))

        if(tank.range<distance || tank.life==0){
            return "Not Enough range or energy"
        }
        else if(tank.range >= distance){
            tank.life--
            enemyTank.life++
        }

        //save changes
        await board.save()


    } catch (error) {
        return error
    }
}

// upgrade range
export const upgradeRange = async(board,Bajji) =>{
    try {
        // get tank
        const tank = getTank(board,Bajji.tankId)
        
        // rules for energy deduction depneding upon range
        const costLookup = {
            2:3,
            3:4,
            4:6,
            5:7
        }

        // check id range is in costLookup and energy is greater than required energy
        if(tank.range in costLookup && tank.energy >=costLookup[tank.range] ){
            tank.range++
            tank.energy -= costLookup[tank.range]
        }
        else if(tank.energy >= 7){
            tank.range++
            tank.energy -= 7
        }

        // save changes
        await board.save()

    } catch (error) {
        return error
    }
}