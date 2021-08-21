var validatePreorder = function(s) {
    const list = s.split(',')
    const stack = []
    for (let i = 0; i < list.length; i++) {
        stack.push(list[i])
        if (stack[stack.length-1] === '#' && stack[stack.length-2] === '#') {
            stack.pop()
            stack.pop()
            stack.push('#')
        }
    }
    return stack.length === 1 && stack[0] === '#'
}