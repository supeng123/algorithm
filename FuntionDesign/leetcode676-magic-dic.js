var MagicDictionary = function() {
    this.dic = new Map()
}

MagicDictionary.prototype.buildDict = function(dictionary) {
    for (let word of dictionary) {
        const len = word.length
        if (!this.dic.has(len)) this.dic.set(len, [])
        this.dic.set(len, this.dic.get(len).push(word))
    }
}

MagicDictionary.prototype.search = function(searchWord) {
    const list = this.dic.get(searchWord)
    if (!list || list.length === 0) return -1
    for (let word of list) {
        let count = 0
        for (let i = 0; i < searchWord.length; i++) {
            if (word[i] !== searchWord[i]) {
                count++
            }
            if (count > 1) break
        }
        if (count === 1) return true
    }
    return false
}