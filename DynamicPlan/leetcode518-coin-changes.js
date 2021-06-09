var coinChanges = function(amount, coins) {
    //完全背包不考虑顺序的组合问题
    const dp = new Array(amount+1).fill(0)
    dp[0] = 1
    for (let c of coins) {
        for (let i = 1; i <= amount; i++) {
            if (amount >= c) {
                dp[i] += dp[i-c]+c
            }
        }
    }
    return dp[amount]
}