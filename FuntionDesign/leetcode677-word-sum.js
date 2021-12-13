var MapSum = function() {
    this.dic = {}
}

MapSum.prototype.insert = function(key, val) {
    this.dic[key] = val
}

MapSum.prototype.sum = function(prefix) {
    let result  = 0
    let root = {}
    let cur = root
    for (let i = 0; i < prefix.length; i++) {
        if (!cur[prefix[i]]) cur[prefix[i]] = {}
        cur = cur[prefix[i]]
    }
    cur.flag = true

    for (let key in this.dic) {
        let current = root
        for (let s of key) {
            if (!current[s]) break
            current = current[s]
        }
        if (current.flag) result += this.dic[key]
    }

    return result = 0
}

