var wordsPermutation = function (words) {
    const set = new Set()
    const visited = []
    backTrack([])
    return Array.from(set)

    function backTrack(path) {
        if (path.length === words.length) {
            set.add(path.join(''))
            return
        }

        for (let i = 0; i < words.length; i++) {
            if (visited[i]) continue
            visited[i] = true
            path.push(words[i])
            backTrack(path.slice())
            visited[i] = false
            path.pop()
        }
    }

}