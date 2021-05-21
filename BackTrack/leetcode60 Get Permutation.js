var getPermutation = function(n, k) {
    let counts = 0
    const used = new Set()
    return backTrack([])
    
    function backTrack(path) {
        if (path.length === n) {
            counts++
            if (counts === k) {
                return path.join('')
            }
            return
        }
        for (let i = 1; i <= n; i++) {
            if (used.has(i)) continue
            used.add(i)
            path.push(i)
            const res = backTrack(path)
            used.delete(i)
            path.pop()
            if (res) return res
        }
    }
}