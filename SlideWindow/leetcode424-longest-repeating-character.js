var longestRepeatedCharaterReplacement = function(s, k) {
    const m = {}
    let left = 0
    let right = 0
    let max = 0
    while (right < s.length) {
        const c = s[right]
        if(m[c] === undefined) {
            m[c] = 0
        }
        m[c]++
        max = Math.max(...Object.values(m))
        if (right - left + 1 > max + k) {
            m[c]--
            left++
        }
    }
    return right-left
}