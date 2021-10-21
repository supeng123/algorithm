var RandomSizeSet = function() {
    this.arr = []
    this.m = new Map()
}

RandomSizeSet.prototype.insert = function(val) {
    if (this.m.get(val)) return false
    const index = this.arr.length - 1
    this.arr.push(val)
    this.m.set(val, index)
    return true
}

RandomSizeSet.prototype.remove = function(val) {
    if (!this.m.get(val)) return false
    const index = this.arr.length - 1
    const removeItemIndex = this.m.get(val)
    if (index === removeItemIndex) {
        this.arr.pop()
        this.m.delete(val)
    } else {
        // val = 1
        // [1,2,3,4,5]
        // [[1,0],[2,1],[3,2],[4,3],[5,4]]
        // [5,2,3,4,1]
        // [[2,1],[3,2],[4,3],[5,0]]
        const lastValue = this.arr.pop()
        this.arr[removeItemIndex] = lastValue
        this.m.set(lastValue, removeItemIndex)
        this.m.delete(val)
    }
    return true
}

RandomSizeSet.prototype.getRandom = function() {
    const size = this.arr.length
    if (size === 0) return false
    return this.arr[Math.floor(Math.random()*size)]
}


