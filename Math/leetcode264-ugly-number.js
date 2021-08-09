var uglyNumber = function(n) {
    const dp = new Array(n)
    dp[0] = 1
    let two = 0
    let three = 0
    let five = 0
    for (let i = 1; i <= n; i++) {
        dp[i] = Math.min(2*dp[two], 3*dp[three], 5*dp[five])
        if (dp[two]*2 === dp[i]) two++
        if (dp[three]*3 === dp[i]) three++
        if (dp[five]*5 === dp[i]) five++
    }
    return dp[n-1]
}