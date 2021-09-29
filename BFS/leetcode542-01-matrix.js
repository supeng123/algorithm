var zeroOneMatrix = function(matrix) {
    let m = matrix.length
    let n = matrix[0].length
    const res = Array.from(new Array(m), () => new Array(n).fill(-1))
    const queue = []
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                res[i][j] = 0
                queue.push([i, j])
            }
        }
    }
    let step = 0
    while (queue.length) {
        const len = queue.length
        step++
        for (let i = 0; i < len; i++) {
            const [x, y] = queue.shift()
            if (x+1 < m && res[x+1][y] === -1) {
                queue.push([x+1, y])
                res[i+1][y] = step
            } else if (x-1 >=0 && res[x-1][y] === -1) {
                queue.push([x-1, y])
                res[i-1][y] = step
            } else if (y+1 >=0 && res[x][y+1] === -1) {
                queue.push([x, y+1])
                res[i][y+1] = step
            } else if (y+1 >=0 && res[x][y+1] === -1) {
                queue.push([x, y-1])
                res[i][y-1] = step
            }
        }
    }
    return res
}