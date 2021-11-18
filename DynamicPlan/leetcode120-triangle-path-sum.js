var leastTrianglePathSum = function(triangle) {
    const res = []
    for (let i = 0; i < triangle.length; i++) {
        res.push([])
        for (let j = 0; j <= i; j++) {
            res[i][j] = Infinity
        }
    }

    for (let i = 0; i < triangle.length; i++) {
        for (let j = 0; j <= i; j++) {
            if (i > 0 && (j < i)) {
                res[i][j] = Math.min(res[i][j], res[i-1][j] + triangle[i][j])
            }
            if (j > 0) {
                res[i][j] = Math.min(res[i][j], res[i-1][j-1] + triangle[i][j])
            }
        }
    }
    return Math.min(...res[triangle.length-1])
}