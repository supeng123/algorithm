var letterCasePermutation = function(S) {
    const set = new Set()
    backTrack(0, '')
    return Array.from(set)

    function backTrack(index, path) {
        if (index === S.length) {
            set.add(path)
            return
        }

        let cur = S[index]
        let low = path + cur.toLowerCase()
        let up = path + cur.toUpperCase()
        backTrack(index+1, low)
        backTrack(index+1, up)
    }
}