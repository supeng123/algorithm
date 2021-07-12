var wordSearch = function(board, word) {
    const m = board.length
    const n = board[0].length
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === word[0] && backTrack(i, j, 0)) return true
        }
    }

    return false

    function backTrack(l, r, index) {
        if (index === word.length-1) return true
        const temp = board[l][r]
        board[l][r] = false
        if (board[l+1][r] === word[index+1] && backTrack(l+1, r, index+1)) return true
        if (board[l-1][r] === word[index+1] && backTrack(l-1, r, index+1)) return true
        if (board[l][r+1] === word[index+1] && backTrack(l, r+1, index+1)) return true
        if (board[l][r-1] === word[index+1] && backTrack(l, r-1, index+1)) return true
        board[l][r] = temp
        return false
    }
}