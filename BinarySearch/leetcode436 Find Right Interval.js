var findRightInterval = function(intervals) {
    const res = []
    const sorted = intervals.map((interval , index) => {
        return {key: index, value: intervals[0]}
    }).sort((a,b) => a['value'] - b['value'])

    for (let i = 0; i < intervals.length; i++) {
        const cur = intervals[i][1]
        let l = 0
        let r = intervals.length
        while (l < r) {
            let mid = r+l >> 1
            const target = sorted[mid]['value']
            if (target >= cur) {
                r = mid
            } else {
                l = l+1
            }
        }
        if (sorted[l]['value'] !== undefined) {
            res.push(sorted[l]['key'])
        } else {
            res.push(-1)
        }
    }
    return res
}