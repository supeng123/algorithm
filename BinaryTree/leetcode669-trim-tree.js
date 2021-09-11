var trimTree = function(root, low, high) {
    if (!root) return null
    root.left = trimTree(root.left, low, high)
    root.right = trimTree(root.right, low, high)
    if (root.val < low) return root.right
    if (root.val > high) return root.left
    return root
}