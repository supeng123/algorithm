var isInterleave = function(s1, s2, s3) {
    if (s1.length + s2.length !== s3.length) return false
    const m = {}
    return backTrack([], 0, 0)

    function backTrack(path, i, j) {
        if (m[i] !== undefined && m[i][j] !== undefined) return m[i][j]
        if (path.length === s3.length) {
            m[i] = m[i] || {}
            m[i][j] = path.join('') == s3
            return m[i][j]
        }
        let res1 = false
        let res2 = false
        if (i < s1.length && s1[i] === s3[path.length]) {
            path.push(s1[i])
            res1 = backTrack(path.slice(), i+1, j)
            path.pop()
        }
        if (j < s2.length && s2[j] === s3[path.length]) {
            path.push(s2[j])
            res2 = backTrack(path.slice(), i, j+1)
        }
        m[i] = m[i] || {}
        m[i][j] = res1 || res2
        return m[i][j]
    }
}