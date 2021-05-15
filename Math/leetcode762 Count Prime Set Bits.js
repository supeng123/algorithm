var countPrimeSetBits = function(left, right) {
    function isPrime(x) {
        if (x === 1) return false
        for (let i = 2; i < x; i++) {
            if(x%i===0) return false
        }
        return true
    }
    function bitCount(n) {
        return n.toString(2).match(/1/g).length
    }

    let res = 0
    for (let i = left; i <= right; i++) {
        if (isPrime(bitCount(i))) res++
    }
    return res
}