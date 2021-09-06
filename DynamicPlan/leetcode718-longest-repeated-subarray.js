var longestRepeatedSubarry = function(nums1, nums2) {
    let m = nums1.length
    let n = nums2.length
    const dp = Array.from(new Array(m+1), () => new Array(n).fill(0))
    let max = -Infinity
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (nums[i-1] === nums[j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1
                Math.max(dp[i][j], max)
            }
        }
    }
    return max
}