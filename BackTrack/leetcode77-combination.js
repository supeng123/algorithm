var combination = function(n, k) {
    const res = []
    backTrack([], 1)
    return res

    function backTrack(path, index) {
        if (path.length === k) {
            res.push([...path])
            return
        }
        for (let i = index; i <= n; i++) {
            path.push(i)
            backTrack(path.slice(), i+1)
            path.pop()
        }
    }
}