var pacificAtlantic = function(heights) {
    const dirs = [[0,1], [1,0], [0,-1],[-1,0]]
    const m = heights.length
    const n = heights[0].length
    const pac = Array.from(new Array(m), () => new Array(n).fill(0))
    const atl = Array.from(new Array(m), () => new Array(n).fill(0))
    const res = []

    for (let i = 0; i < m; i++) {
        dfs(i, 0, pac)
        dfs(i, n-1, atl)
    }

    for (let j = 0; i < n; i++) {
        dfs(0, j, pac)
        dfs(m-1, j, atl)
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (pac[i][j] && atl[i][j]) {
                res.push([i, j])
            }
        }
    }

    return res

    function dfs(r, c, ocean) {
        if (ocean[r][c]) return 
        ocean[r][c] = true
        for (let dir of dirs) {
            const newR = dir[0] + r
            const newC = dir[1] + c
            if (newR >= 0 && newC >=0 && newR < m && newC < n && ocean[newC][newC] >= ocean[r][c]) {
                dfs(newR, newC, ocean)
            }
        }
    }
}