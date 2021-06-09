var zeroAndOne = function(strs, m, n) {
    //01背包问题
    const getCount = (str) => {
        const counts  = [0, 0]
        for (let i = 0;i < str.length; i++) {
            str[i] === '0' ? counts[0]++ : counts[1]++
        }
        return counts
    }
    const dp = Array.from(new Array(m+1), () => new Array(n+1).fill(0))

    for (let i = 0; i < strs.length; i++) {
        const counts = getCount(strs[i])
        const zero = counts[0]
        const one = counts[1]
        for (let j = m; j >= 0; j--) {
            for (let k = n; k >=0; k--) {
                if (zero <= m && one <= n)  {
                    dp[j][k] = Math.min(dp[j-zero][k-one]+1, dp[j][k])
                }
            }
        }
    }
    return dp[m][n]
}