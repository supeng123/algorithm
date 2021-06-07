var minimusGeneticMutation = function(start, end, banks) {
    //bfs
    if (banks.length === 0) return 0
    const validStr = ['A', 'C', 'G', 'T']
    const visited = new Set()
    const queue = [start]
    while (queue.length !== 0) {
        const len = queue.length
        for (let i = 0; i < len; i++) {
            const val = queue.shift()
            if (val === end) return count
            for (let j = 0; j < val.length; j++) {
                for (const c of validStr) {
                    if (val[j] === c) continue
                    const sequence = val.substring(0, j) + c + val.substring(j+1)
                    if (!banks.includes(sequence) || visited.has(sequence)) continue
                    queue.push(sequence)
                    visited.add(sequence)
                }
            }
        }
        count++
    }
    return -1
}

var minimusGeneticMutation = function(start, end, banks) {
    //dfs
    if (start == end) return 0
    if (banks.length === 0) return -1
    const visited = new Set()
    let min = -1

    function recursive(start, level) {
        if (start === end) {
            min = Math.min(level, min)
        }
        for (let i = 0; i < banks.length; i++) {
            let bank = banks[i]
            let diff = 0
            for (let j = 0; j < bank.length; j++) {
                if (start[i] !== bank[j]) diff++
                if (diff > 1) break
            }

            if (diff === 1 && !visited.has(bank)) {
                visited.add(bank)
                recursive(bank, level+1)
                visited.delete(bank)
            }
        }
    }

    recursive(start, 0)
    return min
}

