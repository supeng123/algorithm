var validString = function(s) {
    const left = []
    const star = []
    let len = s.length

    for (let i = 0; i < len; i++) {
        const cur = s[i]
        if (cur === '(') {
            left.push(i)
        } else if (cur === '*') {
            star.push(i)
        } else {
            if (left.length === 0 && star.length === 0) return false
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