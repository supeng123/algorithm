var reorganizedList = function(head) {
    let slow = head
    let fast = head
    while (fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
    }
    let right = slow.next
    slow.next = null
    
    let pre = null
    while (right) {
        const next = right.next
        right.next = pre
        pre = right
        right = next
    }

    let l = head
    let r = pre
    while (l && r) {
        const lNext = l.next
        const rNext = r.next
        l.next = r
        l = lNext
        r.next = l
        r = rNext
    }
    return head
}