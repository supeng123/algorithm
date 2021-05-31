var goldMiner = function(grid) {
    const isAvailable = grid.map(row => row.map(item => item !== 0))
    const row = grid.length
    const col = grid[0].length
    let max = 0
    let sum = 0
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            recursive(i, j)
        }
    }
    return max

    function recursive(l, r) {
        if (l < 0 || r < 0 || l > row-1 || r > col-1 || isAvailable[l][r]) return
        sum += grid[l][r]
        max = Math.max(sum, max)
        isAvailable[l][r] = false
        recursive(l, r+1)
        recursive(l, r-1)
        recursive(l+1, r)
        recursive(l-1, r)
        sum -= grid[l][r]
        isAvailable[l][r] = true
    }
}