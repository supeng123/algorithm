var sumFromRootToLeaf = function(root) {
    if (!root) return 0
    const paths = []
    preOrder(root, [])
    return paths.reduce((a,b) => Number(a) + Number(b))

    function preOrder(node, path) {
        if (!node) return
        path.push(node.val)
        if (!node.left && !node.right) {
            paths.push(path.slice().join(''))
            return
        }
        preOrder(node.left, path)
        preOrder(node.right, path)
    }
}