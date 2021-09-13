var validParenthesisString = function(s) {
    const left = []
    const star = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            left.push(i)
        } else if (s[i] === '*') {
            star.push(i)
        } else {
            if (!left.length && !star.length) return false
            if (left.length) {
                left.pop()
            } else {
                star.pop()
            }
        }
    }
    while (left.length && star.length) {
        if (left.pop() > star.pop()) return false
    }
    return left.length === 0
}