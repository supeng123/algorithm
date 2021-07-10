var TimeMap = function() {
    this.map = {}
}

TimeMap.prototype.set = function(key, timeStamp, val) {
    let list = this.map[key]
    if (list === undefined) {
        this.map[key] = []
    }
    this.map[key].push([timeStamp, val])
}

TimeMap.prototype.get = function(key, timeStamp) {
    let list = this.map[key]
    if (list === undefined) return ''
    let n = list.length
    if (timeStamp > list[n-1][0]) {
        return list[n-1][1]
    } else if (timeStamp < list[0][0]) {
        return ''
    }

    let l = 0
    let r = n
    while (l < r) {
        let mid = (r-l) >> 1
        if (list[mid][0] > timeStamp) {
            r = mid-1
        } else if (list[mid][0] < timeStamp) {
            l = mid+1
        } else {
            return list[timeStamp][1]
        }
    }
    return list[l][1]
}