var replaceWords = function(dictionary, sentence) {
    const tie = new Tie()
    dictionary.forEach(d => tie.insert(d))
    return sentence.split(' ').map(v => tie.getReplace(v)).join('')
}

var Tie = function() {
    this.children = {}
}

Tie.prototype.insert = function(word) {
    let cur = this
    for (let w of word) {
        if (!cur.children[w]) cur.children[w] = new Tie()
        cur = cur.children[w]
    }
    cur.isEnd = true
}

Tie.prototype.getReplace = function(word) {
    let cur = this
    let base = ''
    for (let c of word) {
        if (!cur.children[c]) return word
        cur = cur.children[c]
        base += c
        if (cur && cur.isEnd) return base
    }
    return base
}