var removeRepeatedWords = function(s) {
    const stack = []
    for (let i = 0; i < s.length; i++) {
        while (stack.length > 0 && stack[stack.length-1] > s[i] && s.indexOf(stack[stack.length-1], i) > i) {
            stack.pop()
        }
        stack.push(s[i])
    }
    return stack.join('')
}