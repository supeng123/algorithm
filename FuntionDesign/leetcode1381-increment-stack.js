var IncrementStack = function(capacity) {
    this.capacity = capacity
    this.list = []
    this.hashMap = {}
}

IncrementStack.prototype.push = function(val) {
    if (this.list.length < this.capacity) {
        this.list.push(val)
    }
}

IncrementStack.prototype.pop = function() {
    const top = this.list.length - 1
    const inc = this.hashMap[top] || 0
    let item = this.list.pop()
    if (!item) return -1

    item += inc
    const newTop = top - 1
    this._setInc(newTop, inc)
    this.hashMap[top] = 0

    return item
}

IncrementStack.prototype.increment = function(k, val) {
    k = k < this.list.length ? k - 1 : this.list.length - 1
    this._setInc(k, val)
}

IncrementStack.prototype._setInc = function(position, incVal) {
    if (!(position in this.hashMap)) {
        this.hashMap[position] = 0
    }
    this.hashMap[position] += incVal
}