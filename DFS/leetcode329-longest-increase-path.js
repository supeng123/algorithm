var longestIncreasePath = function(matrix) {
    const coor = [[0,1],[1,0],[0,-1],[-1,0]]
    if (matrix.length === 0) return 0
    const m = matrix.length
    const n = matrix[0].length
    let res = 1
    const memo = Array.from(new Array(m), () => new Array(n).fill(undefined))

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            res = Math.max(res, dfs(i, j))
        }
    }

    return max

    function dfs(x, y) {
        if (memo[x][y]) return memo[x][y]
        let max = 1
        for (let [i, j] of coor) {
            const newX = i + x
            const newY = j + y
            if (newX >=0 && newY >= 0 && newX < m && newY < n && matrix[newX][newY] > matrix[x][y]) {
                max = Math.max(dfs(newX, newY)+1, max)
            }
        }
        memo[x][y] = max
        return max
    }
}