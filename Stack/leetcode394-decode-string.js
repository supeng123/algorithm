var decodeString = function(s) {
    let res = ''
    let k = ''
    const stack = []
    for (let char of s) {
        if (char > 0) {
            k += char
        } else if (char === '[') {
            stack.push({str:res, k:k})
            res = ''
            k = ''
        } else if (char === ']') {
            const t = stack.pop()
            res = t.str + res.repeat(t.k)
        } else {
            res += char
        }
    }
    return res
}