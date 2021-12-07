var reOrderList = function(head) {
    let slow = head
    let fast = head
    while (fast && fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
    }
    let rightNode = slow.next
    slow.next = null
    
    let pre = null
    while (rightNode) {
        let nextNode = rightNode.next
        rightNode.next = pre
        pre = rightNode
        rightNode = nextNode
    }
    let l = head
    let r = pre

    while (l && r) {
        let lNext = l.next
        let rNext = r.next

        l.next = r
        l = lNext
        r.next = l
        r = rNext
    }
    return head
}