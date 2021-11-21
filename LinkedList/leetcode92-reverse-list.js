var reverseList = function(head, m, n) {
    const dummyNode = {
        next: head
    }
    let before = dummyNode
    let i = 0
    while ( i < m-1) {
        before = before.next
        i++
    }
    let pre = null
    let cur = before.next
    i = 0
    while (i < n-m+1) {
        let cNext = cur.next
        cur.next = pre
        pre = cur
        cur = cNext
    }
    before.next.next = cur
    before.next = pre

    return dummyNode.next
}