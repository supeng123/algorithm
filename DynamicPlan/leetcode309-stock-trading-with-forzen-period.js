var stockTradingWithFrozenPeriod = function(prices) {
    const len = prices.length
    const dp = Array.from(new Array(len), () => new Array(3).fill(0))
    dp[0][0] = -prices[0]
    //0手上持有股票的最大收益，1手上不持有股票，且在冷冻期的最大收益，2手上不持有股票，且不在冷冻期的收益
    for (let i = 1; i < len; i++) {
        dp[i][0] = Math.max(dp[i-1][0], dp[i-1][2] - prices[i])
        dp[i][1] = dp[i-1][0] + prices[i]
        dp[i][2] = Math.max(dp[i-1][2], dp[i-1][1])
    }
    return Math.max(dp[len-1][1], dp[len-1][2])
}