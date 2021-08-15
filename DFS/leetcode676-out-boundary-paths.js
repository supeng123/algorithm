var outBoundaryPaths = function(m, n, maxStep, startColumn, startRow) {
    const visited = new Map()
    return dfs(startRow, startColumn, maxStep)
    
    function dfs(i, j, step) {
        if (step < 0) {
            return 0
        }
        if (i < 0 || j < 0 || i >= m || j >= n) {
            return 1
        }
        const key = `${i}${j}${step}`
        if (visited.has(key)) return visited.get(key)
        let res = 0
        res += dfs(i+1, j, step-1)
        res += dfs(i-1, j, step-1)
        res += dfs(i, j+1, step-1)
        res += dfs(i, j-1, step-1)
        visited.set(key, res)
        return res
    }
}