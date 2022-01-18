var StackOfPlates = function(cap) {
    this.stack = [[]]
    this.capacity = cap
    this.atIndex = 0
}

StackOfPlates.prototype.push = function(val) {
    if (!this.capacity) return null
    if (this.stack[this.atIndex].length >= this.capacity) {
        this.stack.push([val])
        this.atIndex++
    } else {
        this.stack[this.atIndex].push(val)
    }
}

StackOfPlates.prototype.pop = function() {
    const popValue = this.stack[this.atIndex].pop()
    if (!this.stack[this.atIndex].length && this.stack.length !== 1) {
        this.stack.pop()
        this.atIndex--
    }
    return popValue ?? -1
}

StackOfPlates.prototype.popAt = function(index) {
    if (index > this.atIndex) return -1
    const popValue = this.stack[index].pop()
    if (!this.stack[index].length && this.stack.length !== 1) {
        this.stack.splice(index, 1)
        this.atIndex--
    }
    return popValue ?? -1
}