var battleShipsNum = function(broad) {
    let count = 0
    for (let i = 0; i < broad.length; i++) {
        for (let j = 0; j < broad[0].length; j++) {
            if (broad[i][j] === 'X') {
                if (i > 0 && broad[i-1][j] === 'X') continue
                if (j > 0 && broad[i][j-1] === 'X') continue
                count++
            }
        }
    }
    return count
}