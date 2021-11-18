var deleteRepeatNodes = function(head) {
    const cur = head
    while (cur) {
        let nextNode = cur.next
        while (nextNode && nextNode.val === cur.val) {
            nextNode = nextNode.next
        }
        cur.next = nextNode
        cur = cur.next
    }

    return head
}

//82