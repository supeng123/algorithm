var findPairs = function(arr, target) {
    const visit = new Set()
    const res = new Set()
    for (let item of arr) {
        if (visit.has(item-target)) {
            res.add(item-target)
        }
        if (visit.has(item+target)) {
            res.add(item+target)
        }
        visit.add(item)
    }
    return res.size
}