var maxSumPaths = function(root) {
    let max = -Infinity
    return dfs(node)

    function dfs(node) {
        if (!node) return 0
        const l = Math.max(dfs(node.left), 0)
        const r = Math.max(dfs(node.right),0)
        max = Math.max(l + r + node.val, max)
        return node.val + Math.max(l, r)
    }
}