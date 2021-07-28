var kDistance = function(root, target,  k) {
    const res = []
    const p = new Map()
    setParent(root)
    dfs(target, '', 0)
    return res

    function setParent(node) {
        if (node.left) {
            p.set(node.left.val, node)
            setParent(node.left)
        }
        if (node.right) {
            p.set(node.right.val, node)
            setParent(node.right)
        }
    }

    function dfs(node, from, distance) {
        if (node === null) return
        if (distance === k) {
            res.push(node.val)
            return
        }
        if (node.left !== from) {
            dfs(node.left, node, distance+1)
        }
        if (node.right !== from) {
            dfs(node.right, node, distance+1)
        }
        if (p.get(node.val) !== from) {
            dfs(p.get(node.val), node, distance+1)
        }
    }
}