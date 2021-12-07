var LRU = function(capacity) {
    this.count = 0
    this.hash = {}
    this.capacity = capacity

    this.dummyHead = new LinkedList()
    this.dummyTail = new LinkedList()
    this.dummyHead.next = this.dummyTail
    this.dummyTail.pre = this.dummyHead
}

LRU.prototype.get = function(key) {
    const res = this.hash[key]
    if (!!res) {
        this.removeNode(res)
        this.addToHead(res)
    } else {
        return -1
    }
}

LRU.prototype.put = function(key, val) {
    const res = this.hash[key]
    if (!!res) {
        res.val = val
        this.removeNode(res)
        this.addToHead(res)
    } else {
        if (this.count ===  this.capacity) {
            const tail = this.popTail()
            delete this.hash[tail.key]
            this.count--
        }
        const newNode = new LinkedList(key, val)
        this.hash[key] = newNode
        this.count++
        this.addToHead(newNode)
    }
}

LRU.prototype.removeNode = function(node) {
    let tempPre = node.pre
    let tempNext = node.next
    tempPre.next = tempNext
    tempNext.pre = tempPre
}

LRU.prototype.addToHead = function(node) {
    node.pre = this.dummyHead
    node.next = this.dummyHead.next
    this.dummyHead.next.pre = node
    this.dummyHead.next = node
}

LRU.prototype.popTail = function(){
    const tail = this.dummyTail.pre
    this.removeNode(tail)
    return tail
}


var LinkedList = function(key, val) {
    this.key = key
    this.val = val
    this.pre = null
    this.next = null
}
    