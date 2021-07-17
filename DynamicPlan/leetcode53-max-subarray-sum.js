var maxSubarrySum = function(nums) {
    const len = nums.length
    const dp = []
    dp[0] =  nums[0]
    let max = nums[0]
    for (let i = 1; i < len; i++) {
        dp[i] = Math.max(nums[i], dp[i-1]+nums[i])
        max = Math.max(max, dp[i])
    }
    return max
}