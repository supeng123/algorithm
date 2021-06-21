var insertIntoBinaryTree = function(root, val) {
    if (root === null) return new TreeNode(val)
    let cur = root
    while (cur) {
        if (cur.val < val) {
            if (cur.right === null) {
                cur.right = new TreeNode(val)
                break
            } else {
                cur = cur.right
            }
        } else {
            if (cur.left === null) {
                cur.left = new TreeNode(val)
                break
            } else {
                cur = cur.left
            }
        }
    }
    return root
}