var largestProfit = function(difficulty, profit, worker) {
    const len = difficulty.length
    const map = new Map()
    for (let i = 0; i < len; i++) {
        map.set(difficulty[i], Math.max(profit[i], map.get(difficulty[i] || 0)))
    }
    const max = Math.max(...difficulty, ...worker)
    const dp = new Array(max+1).fill(0)
    for (let i = 1; i <= max; i++) {
        dp[i] = Math.max(dp[i-1], map.get(i) || 0)
    }
    return worker.reduce((a,b) => a + dp[b], 0)
}