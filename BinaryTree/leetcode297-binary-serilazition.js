var serialize = function(root) {
    const res = []
    preOrder(root, res)
    return JSON.stringify(res)

    function preOrder(node, list) {
        if (!node) return list.push('*')
        list.push(node.val)
        preOrder(node.left, list)
        preOrder(node.right, list)
    }
}

var deSerialize = function(data) {
    const items = JSON.parse(data)
    return build(items)

    function build(d) {
        const val = d.shift()
        if (val === '*') return null
        const root = new TreeNode(val)
        root.left = build(d)
        root.right = build(d)
        return root
    }
}