var countAndSay = function(n) {
    let res = '1'
    for (let i = 2; i <= n; i++) {
        const ans = []
        let start = 0
        let right = 0
        while (right < res.length) {
            while (right < res.length && res[right] === res[start]) {
                right++
            }
            ans.push(''+(right-start) + res[start])
            start = right
        }
        res = ans.join('')
    }
    return res
}