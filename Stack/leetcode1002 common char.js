var commonChars = function(words) {
    const res = []
    for (let prop of words[0]) {
        let flag = words.every(word => word && word.indexOf(prop) > -1)
        if (flag) {
            res.push(prop)
            words = words.map(word => {
                const idx = word.indexOf(prop)
                const list = word.split('')
                list.splice(idx, 1)
                return list.join('')
            })
        }
    }
    return res
}