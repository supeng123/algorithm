var isBipartite = function(graph) {
    const len = graph.length
    const visited = new Array(len)

    for (let i = 0; i < len; i++) {
        if (visited[i]) continue; 
        const queue = [i]
        visited[i] = 1
        while (queue.length) {
            const index = queue.shift()
            const curColor = visited[index]
            const neighborColor = -curColor
            for (let j = 0; j < graph[index].length; j++) {
                const neighbor = graph[index][j]
                if (visited[neighbor] === undefined) {
                    visited[neighbor] = neighborColor
                    queue.push(neighbor)
                } else if (visited[neighbor] !== neighborColor) {
                    return false
                }
            }
        }
    }

    return true
}