var numberOfSubstrings = function(s) {
    const len = s.length
    let res = 0
    const map = {a : 0, b : 0, c : 0}
    for (let i = 0, j = 0; i < len; i++) {
        const current = s[i]
        map[current]++
        while(j < len && map[a]>0 && map[b] > 0 && map[c] > 0) {
            map[s[j]]--
            j++
        }
        res +=j
    }
    return res
};