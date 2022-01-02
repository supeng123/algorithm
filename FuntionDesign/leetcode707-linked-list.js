var Node = function(val) {
    this.val = val
    this.prev = null
    this.next = null
}

var MyLinkedList = function() {
    this.head = new Node('head')
    this.tail = new Node('tail')
    this.head.next = this.tail
    this.tail.prev = this.head
    this.size = 0
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index >= this.size || index < 0) return -1
    const operateNode = this.operate(index)
    return operateNode.next.val
};

MyLinkedList.prototype.operate = function(index) {
    let cur = this.head
    while (index-- > 0) {
        cur = cur.next
    }
    return cur
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const newNode = new Node(val)
    const nextNode = this.head.next
    nextNode.prev = newNode
    newNode.next = nextNode
    newNode.prev = this.head
    this.head.next = newNode
    this.size++
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    const newNode = new Node(val)
    const prevNode = this.tail.prev
    this.tail.prev = newNode
    newNode.next = this.tail
    newNode.prev = prevNode
    prevNode.next = newNode
    this.size++
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index < 0 || index > this.size) {
      return -1
    }
    if (index === 0) return this.addAtHead(val)
    if (index === this.size) return this.addAtTail(val)
    const operateNode = this.operate(index)
    const cur = new Node(val)
    cur.next = operateNode.next
    operateNode.next.prev = cur
    cur.prev = operateNode
    operateNode.next = cur
    this.size++
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.size) {
      return -1
    }
    const operateNode = this.operate(index)
    operateNode.next = operateNode.next.next
    operateNode.next.prev = operateNode
    this.size--
};

