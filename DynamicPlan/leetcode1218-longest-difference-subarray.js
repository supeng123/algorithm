var longestDifferenceSubarray = function(arr, diff) {
    const dp = []
    let max = 1
    for (let i = 0; i < arr.length; i++) {
        const pre = arr[i] - diff
        dp[arr[i]] = (dp[pre] ? dp[pre] : 0) + 1
        Math.max(dp[arr[i]], max)
    }
    return max
}