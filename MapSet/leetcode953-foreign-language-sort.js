var foreignLanguageSort = function(words, order) {
    const dic = new Array(26).fill(0)
    for (let i = 0; i < order.length; i++) {
        dic[order[i].charCodeAt() - 'a'.charCodeAt()] = i
    }

    for (let i = 0; i < words.length-1; i++) {
        if (!isSort(words[i], words[i+1], dic)) {
            return false
        }
    }
    return true

    function isSort(word1, word2, sortDic) {
        let index = 0
        while (index < word1.length && index < word2.length) {
            const l = sortDic[word1[index].charCodeAt() - 'a'.charCodeAt()]
            const r = sortDic[word2[index].charCodeAt() - 'a'.charCodeAt()]
            if (l < r) {
                return true
            } else if (l > r) {
                return false
            }
            index++
        }

        return index === word1.length
    }
}