var gaslineStation = function(gas, costs) {
    let totalCost = 0
    let totalGas = 0
    for (let i = 0; i < gas.length; i++) {
        totalCost += costs[i]
        totalGas  += gas[i]
    }
    if (totalGas < totalCost) return -1
    let cur = 0
    let start = 0
    for (let i = 0; i < gas.length; i++) {
        cur = cur + gas[i] - costs[i]
        if (need < 0) {
            start++
            cur = 0
        }
    }
    return start
}