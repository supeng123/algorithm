var candyCrush = function (board) {
    let m = board.length
    let n = board[0].length

    return recursive()

    function recursive() {
        for (let j = 0; j < n; j++) {
            let writeI = m-1
            for (let i = m-1; i >= 0; i--) {
                if (board[i][j] > 0) {
                    board[writeI][j] = board[i][j]
                    writeI--
                }
            }
            while(writeI >= 0) {
                board[writeI][j] = 0
                writeI--
            }
        }

        let todo = false
        
        for (let i = 0; i < m; i++) {
            for (let j = 0; j + 2 < n; j++) {
                const v = board[i][j]
                const v2 = board[i][j+1]
                const v3 = board[i][j+2]
                if (v !== 0 && v === v2 && v === v3) {
                    board[i][j] = board[i][j+1] = board[i][j+2] = -v
                    todo = true
                }
            }
        }

        for (let i = 0; i + 2 < m; i++) {
            for (let j = 0; j < n; j++) {
                const v = board[i][j]
                const v2 = board[i+1][j]
                const v3 = board[i+2][j]
                if (v !== 0 && v === v2 && v === v3) {
                    board[i][j] = board[i+1][j] = board[i+2][j] = -v
                    todo = true
                }
            }
        }

        return todo ? recursive() : board
    }
}