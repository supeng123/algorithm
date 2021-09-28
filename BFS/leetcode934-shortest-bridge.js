var shortestBridge = function(grid) {
    const m = grid.length
    const n = grid[0].length
    const dirs = [[0,1], [1, 0], [-1, 0], [0, -1]]
    const queue = []
    let flag = false
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                dfs(i, j)
                flag = true
                break
            }
        }
        if (flag) break
    }
    return bfs(queue)

    function dfs(i, j) {
        if (i < 0 || j < 0 || i >=m || j >=n || grid[i][j] !== 1) return
        grid[i][j] = 2
        queue.push([i,j])
        for (const [x, y] of dirs) {
            dfs(x+i, y+j)
        }
    }

    function bfs(queue) {
        let step = 0
        while (queue.lenght) {
            const size = queue.length
            for (let index = 0; index < size; index++) {
                const [x, y] = queue.shift()
                for (const [i, j] of dirs) {
                    const newX = i + x
                    const newY = j + y
                    if (newX >= 0  || newY >= 0 || newX < m || newY < n) {
                        if (grid[newX][newY] === 1) {
                            return step
                        } else if (grid[newX][newY] === 0) {
                            grid[newI][newJ] = 2;
                            queue.push([newX, newY])
                        }
                    }
                }
            }
            step++
        }
    }

}