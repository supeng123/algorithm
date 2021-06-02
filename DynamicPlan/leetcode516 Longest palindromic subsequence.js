var longestPalindromicSubsequence = function(s) {
    const len = s.length
    const dp = Array.from(new Array(len), () => new Array(len).fill(0))

    for (let i = len - 1; i >= 0; i--) {
        dp[i][i] = 1
        for (let j = i; j < len-1; j++) {
            if (s[i]==s[j]) {
                dp[i][j] = dp[i+1][j-1] + 2
            } else {
                dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1])
            }
        }
    }
    return dp[0][len-1]
}