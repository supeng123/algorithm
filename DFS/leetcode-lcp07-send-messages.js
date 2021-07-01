var sendMessages = function(n, relation, k) {
    const graph = Array.from(new Array(n), () => new Array())
    for (const [start, end] of relation) {
        graph[start].push(end)
    }
    let res = 0
    dfs(0, 0)
    return res
    
    function dfs(index, step) {
        if (step === k) {
            if (index === n-1) res++
            return
        }
        for (const next of graph[index]) {
            dfs(next, step+1)
        }
    }
}

var sendMessages = function(n, relation, k) {
    const graph = Array.from(new Array(n), () => new Array())
    for (const [start, end] of relation) {
        graph[start].push(end)
    }

    const queue = [0]
    let step = 0
    while (queue.length && step < k) {
        let len = queue.length
        step++
        while (len--) {
            const curIndex = queue.shift()
            for (let next of graph[curIndex]) {
                queue.push(next)
            }
        }
    }

    let res = 0
    while (queue.length) {
        const cur = queue.shift()
        if (cur == n-1) res++
    }
    return res
}