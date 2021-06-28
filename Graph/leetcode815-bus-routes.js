var busRoutes = function(routes, source, target) {
    let graph = {}
    let visited = new Set()
    for (let i = 0; i < routes.length; i++) {
        for (let j = 0; j < routes[i].length; j++) {
            const station = routes[i][j]
            if (!graph[station]) {
                graph[station] = new Set()
            }
            graph[station].add(i)
        }
    }
    let step = 0
    let queue = [source]
    visited.add(source)

    while(queue.length) {
        const len = queue.length
        while (len--) {
            const cur = queue.shift()
            if (cur === target) {
                return step
            }
            for (let r of graph[cur]) {
                for (let station of routes[r]) {
                    if (visited.has(station)) continue
                    queue.push(station)
                    visited.add(station)
                }
            }

        }
        step++
    }
    return -1
}