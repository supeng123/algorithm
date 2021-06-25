var openLock = function(deadends, target) {
    const queue = ['0000']
    const deadMap = {}
    const visited = {}
    let step = 0

    function up(temp, index) {
        const path = temp.split('')
        if (path[index] === '9') {
            path[index] = '0'
        } else {
            path[index]++
        } 
        return path.join('')
    }

    function down(temp, index) {
        const path = temp.split('')
        if (path[index] === '0') {
            path[index] = '9'
        } else {
            path[index]--
        } 
        return path.join('')
    }

    while (queue.length !== 0) {
        const len = queue.length
        for (let i = 0; i < len; i++) {
            const cur = queue.shift()
            if (deadends.includes(cur)) continue
            if (cur === target) return step
            for (let i = 0; i < 4; i++) {
                const up = up(cur, i)
                const down = down(cur, i)
                if (!visited[up]) {
                    queue.push(up)
                    visited[up] = true
                }
                if (!visited[down]) {
                    queue.push(down)
                    visited[down] = true
                }
            }
        }
        step++
    }
    return -1
}