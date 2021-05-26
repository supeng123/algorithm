var reverseParenthses = function (s) {
    const stack = []
    for (let c of s) {
        if (c == ')') {
            const arr = []
            const p = stack.pop()
            while (p !== '(') {
                arr.push(k)
                p = stack.pop()
            }
            stack.push(...arr)
        } else {
            stack.push(c)
        }
    }
    return stack.join('')
}