var MyCircularDequeue = function(k) {
    this.capacity = k
    this.head = new Node('head')
    this.tail = new Node('tail')
    this.head.next = this.tail
    this.tail.prev = this.head
    this.size = 0
}

MyCircularDequeue.prototype.insertFront = function(val) {
    if (this.isFull()) return false
    const newNode = new Node(val)
    const nextNode = this.head.next
    nextNode.prev = newNode
    newNode.next = nextNode
    newNode.prev = this.head
    this.head.next = newNode
    this.size++
    return true
}

MyCircularDequeue.prototype.deleteFront = function() {
    if (this.isEmtpy()) return false
    let deleteNode = this.head.next
    let nextNode = deleteNode.next
    this.head.next = nextNode
    nextNode.prev = this.head
    this.size--
    return true
}

MyCircularDequeue.prototype.insertLast = function(val) {
    if (this.isFull()) return false
    const newNode = new Node(val)
    const preNode = this.tail.prev
    newNode.next = this.tail
    newNode.prev = preNode
    preNode.next = newNode
    this.tail.prev = newNode
    this.size++
    return true
}

MyCircularDequeue.prototype.deleteLast = function() {
    if (this.isEmtpy()) return false
    let deleteNode = this.tail.prev
    let prevNode = deleteNode.prev
    prevNode.next = this.tail
    this.tail.prev = prevNode
    this.size--
    return true
}

MyCircularDequeue.prototype.getFront = function() {
    if (this.isEmtpy()) return -1
    return this.head.next.val
}

MyCircularDequeue.prototype.getRear = function() {
    if (this.isEmtpy()) return -1
    return this.tail.prev.val
}

MyCircularDequeue.prototype.isEmpty = function(val) {
    return this.size === 0
}

MyCircularDequeue.prototype.isFull = function(val) {
    return this.size >= this.capacity
}

var Node = function () {
    this.val = this.val
    this.next = null
    this.prev = null
}