var buildTree = function(inorder, postorder) {
    if (postorder.length === 0) return null
    const val = postorder.pop()
    const root = new TreeNode(val)
    const index = inorder.indexOf(val)
    root.left = buildTree(inorder(0, index), postorder(0, index))
    root.right = buildTree(inorder(index+1), postorder(index))
    return root
}