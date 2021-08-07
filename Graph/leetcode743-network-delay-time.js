var networkDelayTime = function(times, n, k) {
    const m = {}
    times.forEach(t => {
        const arr = m[t[0]] || []
        arr.push([t[1], t[2]])
        m[t[0]] = arr
    })

    const visited = new Array(n+1).fill(-1)
    visited[k] = 0
    const queue = [[k, 0]]
    
    while(queue.length) {
        const [node,time] = queue.shift()
        (m[node] || []).forEach((n, t) => {
            if (visited[n] !== -1 && visited[n] <= time + t) return
            visited[n] = time + t
            queue.push([n, visited[n]])
        })
    }

    let res = 0
    for (let i = 1; i < visited.length; i++) {
        if (visited[i] === -1) return -1
        res = Math.max(visited[i], res)
    }
    return res
}