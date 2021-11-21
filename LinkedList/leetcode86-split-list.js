var splitList = function(head, k) {
    let cur = head
    let biggerCopy = new ListNode(0)
    let biggerNode = biggerCopy
    let smallCopy = new ListNode(0)
    let smallerNode = smallCopy
    while (cur) {
        if (cur.val >= k) {
            biggerNode.next = cur
            biggerNode = biggerNode.next
        } else {
            smallerNode.next = cur
            smallerNode = smallerNode.next
        }
        cur = cur.next
    }
    biggerNode.next = null
    smallCopy.next = biggerCopy
    return smallCopy.next
}