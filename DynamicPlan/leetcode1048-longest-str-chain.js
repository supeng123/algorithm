var longestStrChain = function(arr) {
    arr.sort((a,b) => a.length - b.length)
    const len = arr.length
    const dp = new Array(len+1).fill(0)
    for (let i = 1; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (isValid(i, j)) {
                dp[i] = Math.max(dp[i], dp[j]+1)
                max = Math.max(dp[i], max)
            }
        }
    }
    return max

    function isValid(i, j) {
        if (word[i].length !== word[j].length+1) return false
        let a = 0
        let b = 0
        while (a < word[i].length) {
            if (word[i][a] === word[j][b]) {
                a++
                b++
            } else {
                a++
            }
        }
        return b === word[j].length
    }
}