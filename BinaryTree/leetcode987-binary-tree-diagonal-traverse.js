var treeDiagonalTraverse = function(root) {
    const queue = [[root, 0, 0]]
    const m = {}
    while (queue.length) {
        const [{val, left, right}, col, row] = queue.shift()
        if (!(col in m)) m[col] = []
        m[col].push([val, row])
        if (left) queue.push([left, col-1, row+1])
        if (right) queue.push([right, col+1, row+1])
    }

    return Object.keys(m).sort((c1,c2) => c1-c2).map(col => {
        return m[col].sort(compare).map(col => col.val)
    })

    function compare([val1, row1], [val2, row2]) {
        if (row1 != row2) return row1-row2
        return val1-val2
    }
}