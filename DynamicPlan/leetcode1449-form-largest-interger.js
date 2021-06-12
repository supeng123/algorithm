var largestNumber = function(cost, target) {
    const dp = new Array(target+1).fill(-Infinity)
    dp[0] = 0
    for (let c of cost) {
        for (let i = 0; i <= target; i++) {
            if (i > c) {
                dp[i] = Math.max(dp[i], dp[i-c]+1)
            }
        }
    }
    if (dp[target] <= 0) return '0'

    let res = ''
    while (target >= 1)
    for (let i = 8 ; i >= 0; i--) {
        if (target >= cost[i] && dp[target] === dp[target-cost[i]+1]) {
            res += i+1
            target -= cost[i]
            break
        }
    }
    return res
}