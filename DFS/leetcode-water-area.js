var waterArea = function(land) {
    const res = []
    let row = land.length
    let col = land[0].length
    let area
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (land[i][i] == 0) {
                area = 0
                dfs(i,j)
                res.push(area)
            }
        }
    }
    return res.sort((a,b) => a-b)

    function dfs(r, c) {
        if (r < 0 || c < 0 || r >= row || c >= col) return
        land[r][c] = 1
        area++
        dfs(r-1, c)
        dfs(r+1, c)
        dfs(r, c-1)
        dfs(r, c+1)
        dfs(r-1, c-1)
        dfs(r+1, c+1)
        dfs(r-1, c+1)
        dfs(r+1, c-1)
    }
}