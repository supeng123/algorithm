var subdomainVisitCount = function(domains) {
    const m = new Map()
    for (let i = 0; i < domains.length; i++) {
        let [n, keys] = domains[i].split(' ')
        let val = Number(n)
        let index
        while (keys.indexOf('.')) {
            if (m.has(keys)) {
                m.set(keys, m.get(keys)+val)
            } else {
                m.set(keys, val)
            }
            keys = keys.substring(index+1)
        }
        if (keys) {
            if (m.has(keys)) {
                m.set(keys, m.get(keys)+val)
            } else {
                m.set(keys, val)
            }
        }
    }
    const res = []
    for (let [key, val] of m) {
        res.push(val + ' ' + key)
    }
    return res
}