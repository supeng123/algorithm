var compareVersin = function(s1, s2) {
    function change(s) {
        return s.split('.').map(i => Number(i))
    }
    const l1 = change(s1)
    const l2 = change(s2)
    const diff = Math.abs(l1.length - l2.length)
    const left = new Array(diff).fill(0)
    if (l1.length > l2.length) {
        l2 = l2.concat(left)
    } else if (l1.length < l2.length) {
        l1 = l1.concat(left)
    }
    for (let i = 0; i < l1.length; i++) {
        if (l1[i] > l2[i]) return 1
        if (l1[i] < l2[i]) return -1
    }
    return 0
}