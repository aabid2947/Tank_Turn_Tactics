export const possibleMoves = (Board, positionX, positionY) => {
    if (Board[positionX][positionY] != 't') return
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
    console.log(valid_moves)
    return valid_moves

}


export const Move = (Board, posX, posY, valid_moves) => {
    let move = false
    valid_moves.forEach((pos) => {
        if (posX == pos[0] && posY == pos[1]) {
            move = true
        }
    })
    return move
}



