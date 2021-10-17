var bestPerformancePeriod = function(times) {
    const len = times.length
    const preSum = new Array(len+1).fill(0)
    for (let i = 0; i < len; i++) {
        if (times[i] > 8) preSum[i+1] = preSum[i] + 1
        else preSum[i+1] = preSum - 1
    }
    const stack = [0]
    for (let i = 1; i < preSum.length; i++) {
        if (preSum[stack[stack.length-1]] > preSum[i]) stack.push(i)
    }
    let max  = 0
    for (let i = preSum.length-1; i > max; i--) {
        while (stack.length > 0 && preSum[stack[stack.length-1]] < preSum[i]) {
            max = Math.max(max, i - preSum.pop())
        }
    }
    return max

}

var bestPerformancePeriod = function(times) {
    let cur = 0;
    let res = 0
    const m = new Map()
    for (let i = 0; i < times.length; i++) {
        if (times[i] > 8) {
            cur++
        } else {
            cur--
        }
        if (cur > 0) {
            res = i+1
        } else {
            if (!m.has(cur)) {
                m.set(cur, i)
            }
            if (m.has(cur-1)) {
                res = Math.max(res, i - m.get(cur-1))
            }
        }
    }
    return res
}