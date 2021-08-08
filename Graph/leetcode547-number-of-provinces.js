var numOfProvinces = function(provices) {
    const n = provices.length
    const visite = new Set()
    let circles = 0
    const queue = new Array()
    for (let i = 0; i < n; i++) {
        if (!visited.has(i)) {
            queue.push(i)
            while (queue.length) {
                const j = queue.shift()
                visite.add(j)
                for (let k = 0; k < n; k++) {
                    if (provices[j][k] === 1 && !visite.has(k)) {
                        queue.push(k)
                    }
                }
            }
            circles++
        }
    }
    return circles
}