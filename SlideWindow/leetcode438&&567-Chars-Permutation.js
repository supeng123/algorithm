var charsPermutation = function(s1, s2) {
    const n1 = s1.length
    const n2 = s2.length
    if (n1 > n2) return false
    const count = new Array(26).fill(0)
    let isZero = (count) => count.every(v => v === 0)
    for (let i = 0; i < n1; i++) {
        count[s1[i].charCodeAt()-97]--
        count[s2[i].charCodeAt()-97]++
    }
    if (isZero(count)) return true
    for (let i = n1; i < n2; i++) {
        count[s2[i].charCodeAt()-97]++
        count[s2[i-n1].charCodeAt()-97]--
        if (isZero(count)) return true
    }
    return false
}

var findAnagrams = function(s, p) {
    const res = []
    const n1 = p.length
    const n2 = s.length
    if (n1 > n2) return false
    const count = new Array(26).fill(0)
    let isZero = (count) => count.every(v => v === 0)
    for (let i = 0; i < n1; i++) {
        count[p[i].charCodeAt()-97]--
        count[s[i].charCodeAt()-97]++
    }
    if (isZero(count)) return res.push(0)
    for (let i = n1; i < n2; i++) {
        count[s[i].charCodeAt()-97]++
        count[s[i-n1].charCodeAt()-97]--
        if (isZero(count)) return res.push(i-n1+1)
    }
    return res
}