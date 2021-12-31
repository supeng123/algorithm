var LFU = function(capacity) {
    this.capacity = capacity
    this.size = 0
    this.minFrequence = 0
    this.cacheMap = new Map()
    this.frequenceMap = new Map()
}

LFU.prototype.get = function(key) {
    const node = this.cacheMap.get(key)
    if (!node) return -1

    this._increaseFrequence(node)
    return node.val
}

LFU.prototype.put = function(key, val) {
    if (this.capacity === 0) {
        return
    }
    const node = this.cacheMap.get(key)
    if (node) {
        node.val = val
        this._increaseFrequence(node)
    } else {
        if (this.size === this.capacity) {
            const minFreqList = this.frequenceMap.get(this.minFrequence)
            this.cacheMap.delete(minFreqList.tail.prev.key)
            minFreqList.delete(minFreqList.tail.pre)
            this.size--
        }

        const newNode = new Node(key, val)
        this.cacheMap.set(key, newNode)
        let linkedList = this.frequenceMap.get(1)
        if (!linkedList) {
            linkedList = new DoubleLinkedList()
            this.frequenceMap.set(1, linkedList)
        }
        linkedList.add(newNode)
        this.size++
        this.minFrequence = 1
    }
}

LFU.prototype._increaseFrequence = function(node) {
    let freq = node.freq
    let linkedList = this.frequenceMap.get(freq)
    linkedList.delete(node)

    if (freq === this.minFrequence && linkedList.head.next === linkedList.tail) {
        this.minFrequence = freq + 1
    }
    node.freq++
    linkedList = this.frequenceMap.get(freq+1)
    if (!linkedList) {
        linkedList = new DoubleLinkedList()
        this.frequenceMap.set(freq+1, linkedList)
    }
    linkedList.add(node)
}

var Node = function(key, val) {
    this.key = key
    this.val = val
    this.freq = 1
    this.prev = null
    this.next = null
}

var DoubleLinkedList = function() {
    this.head = new Node()
    this.tail = new Node()
    this.head.next = this.tail
    this.tail.prev = this.head
}

DoubleLinkedList.prototype.add = function(node) {
    node.next = this.head.next
    this.head.next.prev = node
    this.head.next = node
    node.prev = this.head

}

DoubleLinkedList.prototype.delete = function(node) {
    node.prev.next = node.next
    node.next.prev = node.prev
}