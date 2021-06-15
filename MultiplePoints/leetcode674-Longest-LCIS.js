var longestLCIS = function(num) {
    const len = num.length
    let start = 0
    let max = 0
    for (let i = 0; i < len; i++) {
        if (i > 0 && num[i] <= num[i-1]) {
            start = i
        }
        max = Math.max(max, i-start+1)
    }
    return max
}