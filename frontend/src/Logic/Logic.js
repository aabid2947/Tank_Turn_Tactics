const InitializeGame = () => {
    // Number of rows
    const n = 16;

    // Number of columns
    const m = 16;

    // Initialize result with an empty array
    const result = [];

    // Iterate n number of times to
    // create n number of rows
    for (let i = 0; i < n; i++) {
        // For each of row create an Array
        // of length m (number of columns)
        const row = Array.from({ length: m });
        result.push(row);
    }
    // Set chess board's value to the
    // created 2d result array
    for (let i = 0; i < 3; i++) {
        let randomX = Math.floor(Math.random() * 15)
        let randomY = Math.floor(Math.random() * 15)
        // console.log(result)
        result[randomX][randomY] = 't'
    }
    return result
}

const possibleMoves = (Board, positionX, positionY) => {
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


const Move = (Board, posX, posY, valid_moves) => {
    let move = false
    valid_moves.forEach((pos) => {
        if (posX == pos[0] && posY == pos[1]) {
            move = true
        }
    })
    return move
}



module.exports = {
    InitializeGame,
    possibleMoves,
    Move
}