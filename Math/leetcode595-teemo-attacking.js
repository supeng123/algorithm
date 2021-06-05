var teemoAttacking = function(timeSeries, duration) {
    if (timeSeries.length === 0) return 0
    let count = 0
    for (let i = 0; i < timeSeries.length; i++) {
        let rest = timeSeries[i+1] - timeSeries[i]
        count += Math.min(rest, duration)
    }
    return count + duration
}