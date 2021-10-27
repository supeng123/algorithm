var removeInvalidBracket = function(s) {
    const queue = [s]
    const set = new Set()
    const res = []
    while (true) {
        let size = queue.length
        for (let i = 0; i < size; i++) {
            const cur = queue.shift()
            if (isValid(cur)) res.push(cur)

            for (let j = 0; j < cur.length; j++) {
                if (s[j] === '(' || s[j] === ')') {
                    const newChar = s.substring(0, j)+s.substring(j+1)
                    if (!set.has(newChar)) {
                        queue.push(newChar)
                        set.add(newChar)
                    }
                }
            }
        }
        if (res.length > 0) break
    }
}
return res

function isValid(s) {
    let count = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            count++
        } else {
            count--
            if (count < 0) return false
        }
    }
    return count === 0
}