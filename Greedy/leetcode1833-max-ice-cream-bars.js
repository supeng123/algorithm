var maxIceCreamBars = function(costs, coins) {
    costs.sort((a,b)=>a-b)
    let count = 0

    for (let i = 0; i < costs.length; i++) {
        if (coins >= costs[i]) {
            count++
            coins -= costs[i]
        } else {
            break
        }
    }
    return count
}