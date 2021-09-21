var minimumCostForTickets = function(days, costs) {
    const dp = new Array(days[days.length-1]+1).fill(0)
    let daysIndex = 0
    for (let i = 1; i < dp.length; i++) {
        if (i === days[daysIndex]) {
            dp[i] = Math.min(dp[Math.max(0, i-1)] + costs[0], dp[Math.max(0, i-7)] + costs[1], dp[Math.max(0,i-30)]+ costs[2])
            daysIndex++
        } else {
            dp[i] = dp[i-1]
        }
    }
    return dp[dp.length-1]
}