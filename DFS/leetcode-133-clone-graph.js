var cloneGraph = function(node) {
    const visit = new Map()
    dfs(node)
    return visit.get(node)

    function dfs(n) {
        const copy = new Node(n.val)
        visit.set(n, copy)
        (n.neighbors || []).forEach((node) => {
            if (!visit.has(node)) {
                dfs(node)
            }
            copy.neighbors.push(visit.get(node))
        })
    }
}