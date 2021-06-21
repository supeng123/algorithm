var longestConnectString = function(words) {
    let max = 0
    if (isValid(words.join(''))) return words.join('').length

    backTrack(0, [])
    return max
    
    function isValid(s) {
        return s.length === Array.from(new Set(s)).length
    }

    function backTrack(index, path) {
        max = Math.max(max, path.join('').length)
        if (index === words.length) return
        for (let i = 0; i < words.length; i++) {
            const cur = path.join('') + words[i]
            if (isValid(cur)) {
                path.push(words[i])
                backTrack(i+1, path)
                path.pop()
            }
        }
    }
}