var surroundArea = function(board) {
    const m = board.length
    const n = board[0].length
    const dirs = [[0,1], [1,0], [0,-1], [-1,0]]
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === m-1 || j === n-1 || i === 0 || j === 0) {
                if (board[i][j] === 'O') bfs(i, j)
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'NO') {
                board[i][j] = 'O'
            } else if (board[i][j] === 'O') {
                board[i][j] = 'X'
            }
        }
    }
    return board

    function bfs(r, c) {
        board[r][c] = 'NO'
        const queue = [[r, c]]
        while (queue.length) {
            const len = queue.length
            for (let i = 0; i < len; i++) {
                const [row, col] = queue.shift()
                for (let dir of dirs) {
                    const newRow = dir[0] + row
                    const newCol = dir[1] + col
                    if (newRow > 0 && newCol > 0 && newRow < m && newCol < n) {
                        if (board[newRow][newCol] === 'O') {
                            board[newCol][newCol] = 'NO'
                            queue.push([newRow, newCol])
                        }
                    }
                }
            }
        }
    }
}