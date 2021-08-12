var WordDictionary = function() {
    this.map = {}
}

WordDictionary.prototype.addWord = function(word) {
    const len = word.length
    if (this.map[len] === undefined) {
        this.map[len] = []
    }
    this.map[len].push(word)
}

WordDictionary.prototype.search = function(word) {
    const len = word.length
    const regWord = word.replace('.', '\\w')
    const re = new RegExp("^"+regWord+"$")
    if (this.map[len] === undefined) return false

    for (let i = 0; i < this.map[len].length; i++) {
        if (re.test(this.map[len][i])) return true
    }
    return false
}