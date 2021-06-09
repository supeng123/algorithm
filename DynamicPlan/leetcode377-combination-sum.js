var combinationSum = function(nums, target) {
    //顺序的组合背包问题
    const dp = new Array(target+1).fill(0)
    dp[0] = 1
    for(let i = 1; i <= target; i++) {
        for (let n of nums) {
            if(n <= i) {
                dp[i] += dp[i-n]
            }
        }
    }
    return dp[target]
}