var countBinarySubstrings = function(s) {
    let sum = 0
    let start = 0
    let n = s.length
    let last = 0
    while (start < n) {
        const c = s.charAt(start)
        let count  = 0
        while (start < n && s.charAt(start) === c) {
            count++
            start++
        }
        sum += Math.min(count, last)
        last = count
    }
    return sum
}