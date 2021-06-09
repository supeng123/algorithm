var treeMaxWidth = function(root) {
    //bfs
    if(!root) return 0
    const queue = [root, 0]
    let max = 0

    while (queue.length !== 0) {
        let len = queue.length
        const first = queue[0][1]
        max = Math.max(queue[queue.length-1][1] - first + 1, max)
        while (len--) {
            const [node, idx] = queue.shift()
            idx -= first
            if (node.left) {
                queue.push(node.left, idx*2)
            }
            if (node.right) {
                queue.push(node.left, idx*2+1)
            }
        }
    }
    return max
}