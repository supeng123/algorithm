var sumTree = function(root) {
    let sum  = 0
    dfs(root)
    return root
    function dfs(node) {
        if (!node) return
        dfs(node.right)
        sum += node.val
        node.val = sum
        dfs(node.left)
    }
}