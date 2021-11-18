var swapNodes = function(head) {
    if (!head || !head.next) return head
    let dummyNode = {
        next: head
    }
    let cur = dummyNode
    while (cur.next && cur.next.next) {
        let startNode = cur.next
        let endNode = cur.next.next
        startNode.next = endNode.next
        endNode.next = startNode

        cur.next = endNode
        cur = startNode
    }
    return dummyNode.next
}