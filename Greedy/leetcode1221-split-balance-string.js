var splitBalanceString = function(s) {
    let m = 0
    let n = 0
    let count  = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'L') {
            m++
            if (m === n){
                m = 0
                n = 0
                count++
            }
        } else {
            n++
            if (m === n) {
                m = 0
                n = 0
                count++
            }
        }
    }
    return count
}