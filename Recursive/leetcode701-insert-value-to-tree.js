var insertValueToTree = function(root, val) {
    if (root == null) {
        const root = new TreeNode(val)
        return root
    }
    if (root.val > val) {
        root.left = insertValueToTree(root.left, val)
    } else {
        root.right = insertValueToTree(root.right, val)
    }
    return root
}