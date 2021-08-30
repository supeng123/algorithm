var maxAncestorDiff = function(root) {
    let res = 0
    preOrder(root, root.val, root.val)
    return res

    function preOrder(node, max, min) {
        if (!node) return
        res = Math.max(Math.abs(max - node.val), Math.abs(min - node.val), res)
        max = node.val > max ? node.val : max
        min = node.val < min ? node.val : min
        preOrder(node.left, max, min)
        preOrder(node.right, max, min)
    }
}