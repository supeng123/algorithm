const copyRandomLinkedList = function(head) {
    const m = new Map()
    let cur = head
    while (cur) {
        const curNode = new ListNode(cur.val)
        m.set(cur, curNode)
        cur = cur.next
    }
    cur = head
    while (cur) {
        const newNode = m.get(cur)
        const nextNode = newNode.next
        const randomNode = newNode.random
        if (nextNode) newNode.next = newNode
        if (randomNode) nextNode.random = randomNode
        cur = cur.next
    }
    return m.get(head)
}