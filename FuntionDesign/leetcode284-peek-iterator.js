var PeekInterator = function(iterator) {
    this.arr = []
    while (iterator.hasNext()) this.arr.push(iterator.next())
}

PeekInterator.prototype.peek = function() {
    return this.arr[0]
}

PeekInterator.prototype.next = function() {
    return this.arr.shift()
}

PeekInterator.prototype.hasNext = function() {
    return this.arr.length
}