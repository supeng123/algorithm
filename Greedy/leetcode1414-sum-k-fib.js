var sumKFib = function(k) {
    if (k < 2) return 1
    const dp = [1,1]
    let maxIndex
    let ans = 0
    for (let i = 2; i <= k; i++) {
        dp[i] = dp[i-1] + dp[i-2]
        if (dp[i] == k) return 1
        if (dp[i] > k) {
            maxIndex = i
        }
    }
    while (k > 0) {
        if (k >= dp[maxIndex]) {
            k -= dp[maxIndex]
            ans++
        }
        maxIndex--
    }
    return ans
}