var groupOfSpecialEquivalentStrings = function(words) {
    const res = []
    for (let i = 0; i < words.length; i++) {
        const word = words[i].split('')
        const even = word.filter((w, i) => i%2===0).sort((a,b)=> a.localeCompare(b)).join('')
        const odd = word.filter((w, i) => i%2===1).sort((a,b)=> a.localeCompare(b)).join('')
        res.push(even+odd)
    }
    return [...new Set(res)].length
}