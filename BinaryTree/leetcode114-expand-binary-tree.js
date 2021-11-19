var expandBinaryTree = function(root) {
    if (root === null) return
    let stack = []
    while (root.left || root.right || stack.length) {
        if (root.right) {
            stack.push(root.right)
        }
        if (root.left) {
            root.right = root.left
            root.left = null
        } else {
            root.right = stack.pop()
        }
        root = root.right
    }
}