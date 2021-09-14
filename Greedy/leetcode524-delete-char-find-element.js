var deleteCharFindElement = function(s, dictionary) {
    dictionary.sort((a, b) => {
        if (a.length !== b.length) {
            return b.length - a.length
        } else {
            a.localeCompare(b)
        }
    })
    for (let k of dictionary) {
        let i = 0, j = 0;
        while (i < s.length && j < k.length) {
            if (k[i] === s[j]) {
                i++
            }
            j++
        }
        if (i === k.length) return k
    }
    return ''
}