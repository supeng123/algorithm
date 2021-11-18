var wordBreak = function(s, wordDic) {
    const dp = new Array(s.length+1).fill(false)
    dp[0] = 0
    for (let i = 0; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordDic.includes(s.substring(i, j))) {
                dp[i] = true
                break
            }
        }
    }
    return dp[s.length]
}