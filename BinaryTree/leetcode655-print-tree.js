var printTree = function(root) {
    const h = height(root)
    const col = Math.pow(2, h) - 1
    const res = Array.from(new Array(h), () => new Array(col).fill(''))
    printSingleRow(res, root, 0, 0, col)
    return res

    function height(node) {
        if (!node) return 0
        return Math.max(height(node.left), height(node.right))+1
    }

    function printSingleRow(res, root, row, left, right) {
        if (root) {
            let mid = Math.floor((left + right)/2)
            res[row][mid] = String(root.val)
            printSingleRow(rew, root.left, row + 1, left, mid)
            printSingleRow(rew, root.right, row + 1, mid+1, right)
        }
    }
}