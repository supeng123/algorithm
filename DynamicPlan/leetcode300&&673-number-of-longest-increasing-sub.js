var findNumberOFLIS = function(nums) {
    const len = nums.length
    const dp = new Array(len).fill(1)
    const count = new Array(len).fill(1)
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                if (dp[j] + 1 > dp[i]) {
                    count[i] = count[j]
                    dp[i] = dp[j] + 1
                } else if (dp[j] + 1 === dp[i]) {
                    count[i] += count[j]
                }
            }
        }
    }
    let max = Math.max(...dp)
    let res = 0
    for (let i = 0; i < len; i++) if (dp[i] == max) res += count[i]
    return res
}