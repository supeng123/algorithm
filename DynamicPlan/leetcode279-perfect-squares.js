var perfectSquares = function(n) {
    //完全背包
    const dp = new Array(n+1).fill(Infinity)
    dp[0] = 0
    for (let i = 1; i <= Math.sqrt(n); i++) {
        for (let j = 0; j <= n; j++) {
            if (j >= i*i) {
                dp[j] = Math.min(dp[j], dp[j-i*i]+1)
            }
        }
    }
    return dp[n]
}