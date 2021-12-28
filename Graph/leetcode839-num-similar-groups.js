var numSimilarGroups = function(strs) {
    // 并查集
    const len = strs.length
    const res = new Array(len+1).map((k, v) => v)
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            const fi = find(i)
            const fj = find(j)
            if (fi === fj) continue
            if (check(s[i], s[j], len)) {
                res[fi] = fj
            }
        }
    }

    let ans = 0
    for (let i = 0; i < n; i++) {
        if (res[i] === i) ans++ 
    }

    return ans

    function find(index) {
        return res[index] === index ? res[index] : (res[index] = find(res[index]))
    }

    function check(s1, s2, len) {
        let diff = 0
        for (let i = 0; i < len; i++) {
            if (s1[i] !== s2[i]) diff++
            if (diff > 2) return false
        }
        return true
    }
}