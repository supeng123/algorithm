var shortestCompeletingWord = function(licensePlate, words) {
    const chars = licensePlate.replace(/[^A-Za-z]/g, '').toLowerCase().split('')
    const lists = chars.map(c => c.charCodeAt() - 'a'.charCodeAt())

    return words.filter(word => {
        const map = new Array(26).fill(0)
        for (let i = 0; i < word.length; i++) {
            map[word[i].charCodeAt() - 'a'.charCodeAt()]++
        }
        for (const code of lists) {
            if (map[code] < 0) return false
            map[code]--
        }
        return true
    }).sort((a,b) => a.length-b.length)[0]
}