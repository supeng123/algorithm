var longestCommonSubsequence = function (text1, text2) {
    let m = text1.length
    let n = text2.length
    const dp = Array.from(new Array(m+1), () => new Array(n+1).fill(0))
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <=n; j++) {
            if (m[i] === n[j]) {
                dp[i][j] = dp[i-1][j-1] + 1
            } else {
                dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1])
            }
        }
    }
    return dp[m][n]
}