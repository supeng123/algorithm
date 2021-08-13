var superUglyNumber = function(n, primes) {
    const dp = new Array(primes.length).fill(0)
    const data = [1]
    let ans = 1
    while (data.length < n) {
        ans = data[dp[0]] * primes[0]
        for (let i = 0; i < primes.length; i++) {
            ans = Math.min(data[dp[i]]*primes[i], ans)
        }
        for (let i = 0; i < primes.length; i++) {
            if (ans === data[dp[i]] * primes[i]) dp[i]++
        }
    }
    return ans
}