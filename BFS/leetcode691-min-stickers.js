var minStickers = function(stickers, target) {
    const exist = new Set(target)
    const available = []
    const visited = new Set()
    for (let sticker of stickers) {
        const m =  getCounter(sticker)
        if (m) {
            available.push(m)
        }
    }
    const queue = [[target, 0]]
    visited.add(target)
    while (queue.length) {
        const [cur, step] = queue.shift()
        if (!cur) return step

        for (let m of available) {
            if(m.has(cur.charAt(0))) {
                const newC = transfer(cur, m)
                if (!visited.has(newC)) {
                    queue.push([newC, step+1])
                    visited.add(newC)
                }
            }
        }
    }

    return -1

}

function getCounter(s) {
    const m = new Map()
    for (let c of s) {
        if (exist.has(c)) {
            if (m.has(c)) {
                m.set(c, m.get(c)+1)
            } else {
                m.set(c, 1)
            }
        }
    }
    return m.size > 0 ? m : null
}

function transfer(s, map) {
    const copy = new Map(map)
    const res = []
    for (let c of s) {
        if (copy.has(c)) {
            copy.set(c, copy.get(c)-1)
        } else {
            res.push(c)
        }
    }
    return c.join('')
}