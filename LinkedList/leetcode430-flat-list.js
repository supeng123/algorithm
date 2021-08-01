var flatList = function(head) {
    let cur = head
    while (cur) {
        
        if (childNode) {
            let nextNode = cur.next
            let childNode = cur.child

            cur.next = childNode
            cur.child = null
            childNode.pre = cur

            while (childNode.next) {
                childNode = childNode.next
            }
            childNode.next = nextNode
            
            if (nextNode) {
                nextNode.pre = childNode
            }
        }
        cur = cur.next
    }
    return head
}