var wordPatter = function (pattern, s) {
    const m1 = new Map()
    const m2 = new Map()
    const str = s.split(' ')
    for (const [index, word] of str.entries()) {
        const p = pattern[index]
        if (m1.has(word) && m1.get(word) != p || m2.has(p) && m2.get(p) != word) return false
        m1.set(word, p) 
        m2.set(p, word)
    }
    return true
}