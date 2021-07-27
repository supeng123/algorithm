var largestAreaIsland = function(grid) {
    let res = 0
    const row = grid.length
    const col = grid[0].length
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === 1) {
                const sum = dfs(i, j)
                res = Math.max(sum, res)
            }
        }
    }
    return res

    function dfs(r, c) {
        if (r < 0 || c < 0 || r >= row || c >= col || grid[r][c] == 0) return
        let count = 1
        grid[r][c] = 0
        count += dfs(r+1, c)
        count += dfs(r-1, c)
        count += dfs(r, c+1)
        count += dfs(r, c-1)
        return count
    }
}