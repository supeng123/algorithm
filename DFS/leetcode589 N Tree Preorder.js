var treePreOrder = function(root) {
    const res = []
    dfs(root)
    return res
    function dfs(node) {
        if (!node) return
        res.push(node.val)
        for (let i = 0; i < node.children.length; i++) {
            dfs(node.children[i])
        }
    }
}