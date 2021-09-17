var validSudoku = function(board) {
    const set = new Set()
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const number = board[i][j]
            const row = `${number}r${i}`
            const col = `${number}c${j}`
            const section = `${number}s(${Math.floor(i/3)}${Math.floor(j/3)})`
            if (set.has(row) || set.has(col) || set.has(section)) return false
            set.add(row)
            set.add(col)
            set.add(section)
        }
    }
    return false
}