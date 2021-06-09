var profitPlan = function(n, minProfit, group, profit) {
    //01背包问题
    const dp = Array.from(new Array(n+1), () => new Array(minProfit+1).fill(0))
    for (let i = 0; i <= n; i++) {
        dp[i][0] = 1
    }
    const len = group.length
    for (let i = 1; i <= len; i++) {
        const g = group[i]
        const p = profit[i]
        for (let j = n; j >= g; j--) {
            for (let k = minProfit; k >= 0; k--) {
                dp[j][k] = Math.max(dp[j][k], dp[j-g][Math.max(k-p, 0)]%1000000007)
            }
        }
    }
    return dp[n][minProfit]
}