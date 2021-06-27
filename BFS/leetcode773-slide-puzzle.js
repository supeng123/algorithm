var slidePuzzle = function(board) {
    const target = [1,2,3,4,5,0]
    const queue = [[].concat(...board)]
    const used = {}
    let step = 0
    const neighbors = [[3,1],[4,0,2],[5,1],[0,4],[1,3,5],[2,4]]

    while (queue.length !== 0) {
        const len = queue.length
        while (len --) {
            const cur = queue.shift()
            if (target.toString() === cur.toString()) return step
            const idx = cur.findIndex(i => !i)
            const neighbor = neighbors[idx]
            for (let i = 0; i < neighbor.length; i++) {
                const copy = [...cur]
                [copy[i], copy[idx]] = [copy[idx], copy[i]]
                if (!used[copy.toString()]) {
                    queue.push(copy)
                    used[copy.toString()]=true
                }
            }
        }
        step++
    }
    return -1
}