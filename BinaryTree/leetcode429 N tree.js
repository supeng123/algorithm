var levelOrder = function(root) {
    if (!root) return []
    const res = []
    const queue = [root]
    let level = 0
    while (queue.length !== 0) {
        const len = queue.length
        res.push([])
        for (let i = 0; i < len; i++) {
            const cur = queue.shift()
            res[level].push(cur.val)
            if (cur.children.length > 0) {
                queue.push(...cur.children)
            }
        }
        level++
    }
    return res
};