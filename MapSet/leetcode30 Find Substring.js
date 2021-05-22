var findSubstring = function (s, words) {
    const wordsCount = {}
    const wordSize = words[0].length
    const substringLen = words.length * wordSize
    for (let i = 0; i < words.length; i++) {
        const word = words[i]
        if (wordsCount[word] == undefined) {
            wordsCount[word] = 0
        }
        wordsCount[word]++
    }
    const res = []
    for (let i = 0; i <= s.length - substringLen; i++) {
        const copyM = Object.assign({}, wordsCount)
        let count = words.length

        for (let j = i; j < i + substringLen; j += wordSize) {
            const w = s.slice(j, j+wordSize)
            if (!copyM[w] || copyM[w] <= 0) break
            copyM[w]--
            count--
        }
        if (count === 0) res.push(i)
    }
    return res
}