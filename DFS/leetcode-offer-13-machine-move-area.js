var machineMoveArea = function(m, n, k) {
    let count = 0
    let map = new Map()
    dfs(0, 0)

    function dfs(i, j) {
        if (i < 0 || j < 0 || i >= m || j >=n || map.has(`${i}&${j}`) || total(i) + total(j) > k) return
        map.set(`${i}&${j}`, true)
        count++
        dfs(i+1, j)
        dfs(i-1, j)
        dfs(i, j+1)
        dfs(i, j-1)
    }

    function total(c) {
        return c.toString().split('').reduce((a,b) => a += Number(b),0)
    }

    return count
}