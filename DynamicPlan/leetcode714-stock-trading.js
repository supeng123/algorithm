var stockTrading = function(nums, fee) {
    let len = nums.length
    const dp = Array.from(new Array(len), () => new Array(2).fill(0))
    dp[0][0] = 0
    dp[0][1] = -nums[0]
    for (let i = 1; i < len; i++) {
        //0 当天不拥有一只股票的最大收益， 1 当天拥有一只股票的最大收益
        dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + nums[i] - fee)
        dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] - nums[i])
    }
    return dp[n-1][0]
}