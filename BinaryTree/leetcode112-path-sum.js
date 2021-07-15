var pathSum = function(root, sum) {
    if (root == null) return false
    if (root.left == null && root.right == null) {
        return root.val = sum
    }

    return pathSum(root.left, sum-root.val) || pathSum(root.right, sum-root.val)
}

var pathSum = function(root, sum) {
    if (root == null) return false

    preOrder(root, [])
    return false

    function preOrder(node, path) {
        if (node == null) return
        if (node.left == null && node.right == null) {
            const total = path.reduce((a,b) => a+b,0)
            if (total == sum) return true
        }
        preOrder(node.left, [...path, node.val])
        preOrder(node.right, [...path, node.val])
    }
}