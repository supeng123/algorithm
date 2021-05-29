var connect = function(root) {
    if(!root) return null
    const queue = [root]
    while (queue.length !== 0) {
        let len = queue.length
        let pre = null
        for (let i = 0; i < len; i++) {
            const current = queue.shift()
            current.left && queue.push(current.left)
            current.right && queue.push(current.right)
            if (pre) {
                pre.next = current
            }
            pre = current
        }
    }
    return root
}