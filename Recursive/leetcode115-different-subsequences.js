var differentSubsequences = function(s, t) {
    const sLen = s.length
    const tLen = t.length
    const memo = Array.from(new Array(sLen), () => new Array(tLen).fill(-1))
    return recursive(sLen-1, tLen-1)


    function recursive(i, j) {
        if (i < 0) return 0
        if (j < 0) return 1
        if (memo[i][j] !== -1) return memo[i][j]
        if (s[i] === t[j]) {
            memo[i][j] = recursive(i-1, j-1) + recursive(i-1, j)
        } else {
            memo[i][j] = recursive(i-1, j)
        }
        return memo[i][j]
    }
}