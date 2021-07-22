var canPartition = function(nums) {
    const sum = nums.reduce((a, b) => a + b)
    if (sum % 2) return false
    const target = sum / 2
    const m = new Map()
    return dfs(0, 0)

    function dfs(t, index) {
        if (index === nums.length || t > target) return false
        if (target === t) return true
        const key = t + '&' + index
        if (m.has(key)) return m.get(key)
        const result = dfs(t + nums[index], index + 1) || dfs(t, index + 1)
        m.set(key, result)
        return result
    }
}

var canPartition = function(nums) {
    const sum = nums.reduce((a, b) => a + b)
    if (sum % 2) return false
    const target = sum / 2
    const dp = new Array(target+1).fill(false)
    dp[0] = true

    for (let num of nums) {
        for (let i = target; i >= num; i--) {
            dp[i] = dp[i] || dp[i-num]
        }
    }
    return dp[target]
}