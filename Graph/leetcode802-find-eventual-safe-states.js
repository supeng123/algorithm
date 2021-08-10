var findEventualSafeStates = function(graph) {
    const n = graph.length
    const rg = new Array(n).fill(0).map(() => new Array())
    const inDeg = new Array(n).fill(0)
    for (let i = 0; i < n; i++) {
        for (let g of graph[i]) {
            rg[g].push(i)
        }
        inDeg[i] = graph[i].length
    }
    const queue = []
    for (let i = 0; i < n; i++) {
        if (inDeg[i] == 0) {
            queue.push(i)
        }
    }
    
    while(queue.length) {
        const z = queue.shift()
        for (const x of rg[z]) {
            if (--inDeg[x] == 0) {
                queue.push(x)
            }
        }
    }

    const res = []
    for (let k = 0; k < n; k++) {
        if (inDeg[k] === 0) {
            res.push(k)
        }
    }
    return res
}