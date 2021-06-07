var addOneRowToTree = function(root, val, depth) {
    if (depth === 1) {
        const newRoot = new TreeNode(val)
        newRoot.left = root
        return newRoot
    }
    dfs(root, 1)
    return root
    
    function dfs(node, curDepth) {
        if (!node) return
        if (curDepth === depth-1) {
            let tree = node.left
            node.left = new TreeNode(val)
            node.left.left = tree
            tree = node.right
            node.right = new TreeNode(val)
            node.right.right = tree
        } else {
            dfs(node.left, curDepth+1)
            dfs(node.right, curDepth+1)
        }
    }
}