var countPrimes = function (n) {
    const all = new Array(n).fill(1)
    let count = 0
    for (let i = 2; i < n; i++) {
        if (all[i]) {
            count++
            for (let j = i * i; j < n; j += i) {
                all[j] = 0
            }
        }
    }
    return count
}