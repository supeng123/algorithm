var nQueens = function(n) {
    const cols = new Set()
    const lDiago = new Set()
    const rDiago = new Set()
    const res  = []

    function backTrack(broad, row) {
        if (row === n) {
            res.push(broad.map( c => '.'.repeat(c) + 'Q' + '.'.repeat(n-c-1)))
            return
        }
        for (let i = 0; i < n; i++) {
            if (cols.has(i) || lDiago.has(row-i) || rDiago.has(row+i)) return
            broad.push(i)
            cols.add(i)
            lDiago.add(row-i)
            rDiago.add(row+i)
            backTrack(broad, row+1)
            broad.pop()
            cols.delete(i)
            lDiago.delete(row-i)
            rDiago.delete(row+i)
        }
    }
    backTrack([], 0)
    return res
}