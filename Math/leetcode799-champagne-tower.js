var champagneTower = function(poured, query_row, qurey_glass) {
    const dp = Array.from(new Array(102), () => new Array(102).fill(0))
    dp[0][0] = poured
    for (let i = 0; i <= query_row; i++) {
        for (let j = 0; j <= i; j++) {
            let q = (dp[i][j] - 1.0) / 2.0
            if (q > 0) {
                A[i+1][c] += q
                A[i+1][c+1] += q
            }
        }
    }
    return Math.min(1, dp[qurey_row][qurey_glass])
}