var DinnerPlate = function(capacity) {
    this.capacity = capacity
    this.stacks = []
    this.indexes = []
}

DinnerPlate.prototype.push = function(val) {
    if (this.indexes.length > 0) {
        const index = this.indexes[0]
        const stack = this.stacks[index]
        stack.push(val)
        if (stack.length === this.capacity) {
            this.indexes.shift()
        }
    } else {
        if (this.capacity > 1) {
            this.indexes.push(this.stacks.length)
        }
        this.stacks.push([val])
    }
}

DinnerPlate.prototype.pop = function() {
    let lastStack
    while (this.stacks.length) {
        const stack = this.stacks[this.stacks.length-1]
        if (stack.length > 0) {
            lastStack = stack
            break
        } else {
            this.stacks.pop()
            this.indexes.pop()
        }
    }
    if (lastStack) {
        if (lastStack.length === this.capacity) {
            this.insert(this.stacks.length-1)
            return this.lastStack.pop()
        }
    }
    return -1
}

DinnerPlate.prototype.popAtStack = function(index) {
    const stack = this.stacks[index]
    if (!stack || stack.length === 0) return -1
    if (stack.length === this.capacity) {
        this.insert(index)
    }
    return stack.pop()
}

DinnerPlate.prototype.insert = function(index) {
    const idx = this.indexes.findIndex(i => i > index)
    if (idx != -1) {
        this.indexes.splice(idx, 0, index)
    } else {
        this.indexes.push(index)
    }
}