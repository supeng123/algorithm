var sortLinkedList = function(head) {
    if (!head || !head.next) return head
    let slow = head
    let fast = head
    while (fast && fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
    }
    let rightNode = slow.next
    slow.next = null
    let leftNode = head
    return merge(leftNode, rightNode)

    function merge(leftNode, rightNode) {
        let dummyNode = new ListNode(0)
        let cur = dummyNode
        let l = leftNode
        let r = rightNode
        while (l && r) {
            if (l.val <= r.val) {
                cur.next = l
                l = l.next
            } else {
                cur.next = r
                r = r.next
            }
            cur = cur.next
        }
        if (l) {
            cur.next = l
        }
        if (r) {
            cur.next = r
        }
        return dummyNode.next
    }
}