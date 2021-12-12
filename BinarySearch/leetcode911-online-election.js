var OnlineElection = function(persons, times) {
    let leading = -1
    let pre  = 0
    this.res = []
    this.times = times
    const total = {}
    for (let i = 0; i < persons.length; i++) {
        if (!total[persons[i]]) total[persons[i]] = 0
        total[persons[i]]++
        if (total[persons[i]] >= pre) {
            leading = persons[i]
            cur = total[persons[i]]
        }
        res.push(leading)
    }
}

OnlineElection.prototype.q = function(t) {
    let l = 0
    let r = this.times.length-1
    while (l <= r) {
        let mid = Math.floor(l + (r-l)/2)
        if (this.times[mid] === t) {
            return this.res[mid]
        } else if (this.times[mid] < t) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    return this.res[r]
}