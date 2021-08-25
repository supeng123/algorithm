var allPossiblePaths = function(graph) {
    const len = graph.length
    const res = []
    backTrack(0, [0])
    return res

    function backTrack(cur, path) {
        if (cur === len -1) {
            res.push(path.slice())
            return
        }
        for (let g of graph[cur]) {
            path.push(g)
            backTrack(g, path)
            path.pop()
        }
    }
}