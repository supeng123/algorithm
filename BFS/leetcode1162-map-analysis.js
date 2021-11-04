var mapAnalysis = function(grid) {
    let m = grid.length
    let n = grid[0].length
    const queue = []
    const dirs = [[0,1],[1,0],[0.-1],[-1,0]]
    let ans = -1
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                queue.push([i, j])
            }
        }
    }
    if (!queue.length || queue.length === m * n) return ans
    while (queue.length) {
        let len = queue.length
        for (let i = 0; i < len; i++) {
            const cur = queue.shift()
            for (let dir of dirs) {
                const newX = dir[0] + cur[0]
                const newY = dir[1] + cur[1]
                if (newX >= 0 && newX < m && newY >=0 && newY < n && grid[newX][newY] === 0) {
                    queue.push([newX, newY])
                    grid[newX][newY] = 1
                }
            }
        }
        ans++
    }
    return ans
}