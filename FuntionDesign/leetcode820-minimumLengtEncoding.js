var minimumLengthEncoding = function(words) {
    let root = {}
    let res = 0
    words.sort((a,b) => b.length - a.length)

    for (let word of words) {
        let cur = root
        let flag = false
        for (let i = 0; i < word.length; i++) {
            if (!cur[word[i]]) {
                cur[word[i]] = {}
                flag = true
            }
            cur = cur[word[i]]
        }
        if (flag) res += (word.length+1)
    }
    
    return res
}