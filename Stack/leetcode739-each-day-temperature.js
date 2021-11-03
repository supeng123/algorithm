var dayTemperature = function(temperatures) {
    const len = temperatures.length
    const res = new Array(len).fill(0)
    let stack = []
    for (let i = 0; i < len; i++) {
        while (stack.length && temperatures[i] >= temperatures[stack[stack.length-1]]) {
            stack.pop()
        }
        if (stack.length) res[i] = stack[stack.length] - i
        stack.push(i)
    }
    return res
}