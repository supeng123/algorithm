var mostFrequentSubtreeSum = function(root) {
    const m = {}
    postOrder(root)
    const res = []
    let max = 0
    for (let key in m) {
        if (m[key] === max) {
            res.push(Number(key))
        }
        if (m[key] > max) {
            res = [Number(key)]
        }
    }
    return res

    function postOrder(node) {
        if (!node) return 0
        const left = postOrder(node.left)
        const right = postOrder(node.right)
        const sum = left + right + node.val
        if (m[sum] === undefined) m[sum] = 0
        m[sum]++
        return sum
    }
}