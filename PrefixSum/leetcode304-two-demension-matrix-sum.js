var twoDemensionMatrixSum = function(matrix, row1, col1, row2, col2) {
    const m = matrix.length
    const n = matrix[0].length
    const presum = Array.from(new Array(m), () => new Array(n).fill(0))
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            presum[i][j] = presum[i-1][j] + presum[i][j-1] + matrix[i-1][j-1] - presum[i-1][j-1]
        }
    }

    return presum[row2+1][col2+1] - presum[row1][col2+1] - presum[row2+1][col1] + presum[rol1][col1]
}