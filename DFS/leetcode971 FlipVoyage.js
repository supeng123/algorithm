var flipMatchVoyage = function(root, voyage) {
    const ans = []
    let i = 0
    dfs(root)
    if (i == voyage.length) return [-1]
    return ans
    function dfs(node) {
        if (node.val == voyage[i]) {
            i++
            if (node.left && node.left.val === voyage[i]) {
                dfs(node.left)
            }
            if (node.right && node.right.val === voyage[i]) {
                dfs(node.right)
                if (node.left && node.left.val === voyage[i]) {
                    ans.push(node.val)
                    dfs(node.left)
                }
            }
        }
    }
}