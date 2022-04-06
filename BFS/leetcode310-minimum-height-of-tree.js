var minimumHeightOfTree = function(n, edges) {
    const ans = []
    if (n < 2) {
        ans.push(edges[0])
        return ans
    }
    const ajcentTable = Array.from(new Array(n), () => new Array())
    const ajcentList = Array.from(n).fill(0)
    for (let [l ,r] of edges) {
        ajcentTable[l].push(r)
        ajcentTable[r].push(l)
        ajcentList[l]++
        ajcentList[r]++
    }

    let queue = []
    for (let i = 0; i < ajcentList.length; i++) {
        if (ajcentList[i] === 1) queue.push(i)
    }
    let remain = n
    while( remain > 2) {
        const len = queue.length
        remain -= len
        while (len > 0) {
            const cur = queue.shift()
            for (let item of ajcentTable[cur]) {
                ajcentList[item]--
                if (ajcentList[item] === 1) {
                    queue.push(item)
                }
            len--
            }
        }
    }

    while(queue.length) {
        ans.push(queue.shift())
    }

    return ans
}