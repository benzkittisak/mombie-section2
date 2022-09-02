chessBoard = () => {
    let boardSize = 8
    let chessString = ""
    for(let i = 0 ; i < boardSize ; i ++) {
        for(let j = 0 ; j < boardSize ; j ++) {
            chessString += '# '
        }
        chessString += '\n'
    }

    console.log(chessString);
}

chessBoard();