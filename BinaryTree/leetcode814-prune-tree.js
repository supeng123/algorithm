var pruneTree = function(root) {
    if (!root) return null
    return dfs(root) ? root : null
    function dfs(node) {
        if (!node) return false
        const l = dfs(node.left)
        const r = dfs(node.right)
        if (!l) node.l = null
        if (!r) node.r = null
        return node.val === 1 || l || r
    }
}