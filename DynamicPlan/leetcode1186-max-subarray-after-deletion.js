var maxSubarrayAfterDeletion = function(nums) {
// dp[i][0]：不删除元素，以i结尾的连续子数组最大和
// dp[i][1]：删除其中一个得到的最大值，有两种情况（1，删除i 2. 不删除i）
// 思路

// dp[i+1][0]的计算有两种情况：
// 前面所有数之和大于0，dp[i+1][0]=dp[i][0]+arr[i]
// 前面所有数之和小于0，dp[i+1][0]=arr[i]
// dp[i+1][1]的计算有两种情况：
// 删除位置i的数：dp[i+1][1]=dp[i][0]
// 删除其他位置的数：dp[i+1][1]=dp[i][1]+arr[i]
    const len = nums.length
    const dp = Array.from(new Array(len+1), () => new Array(2).fill(-Infinity))
    let max = -Infinity
    for (let i = 0; i < nums.length; i++) {
        dp[i+1][0] = Math.max(dp[i][0] + nums[i], nums[i])
        dp[i+1][1] = Math.max(dp[i][1] + nums[i],  dp[i][0])
        max = Math.max(dp[i+1][0], dp[i+1][1], max)
    }
    return max
}