var makeStringEqual = function(A, B, costSum) {
    let len = A.length
    const diff = []
    for (let i = 0; i < len; i++) {
        diff[i] = Math.abs(A[i].charCodeAt()-B[i].charCodeAt())
    }
    let start = 0
    let left = 0
    let sum = 0
    let maxLength = 0
    while (left < len) {
        sum += diff[start]
        while(sum > costSum) {
            sum -= diff[start]
            start++
        }
        maxLength = Math.max(left-start+1, maxLength)
        left++
    }
    return maxLength
}