var simplifyPath = function (path) {
    const stack = []
    const list = path.split('/')
    for (let i = 0; i < list.length; i++) {
        const c = list[i]
        if (c === '' || c === '.') {
            continue
        } else if (c === '..') {
            if (stack.length > 0) stack.pop()
            continue
        }
        stack.push(c)
    }
    return '/' + stack.join('/')
}