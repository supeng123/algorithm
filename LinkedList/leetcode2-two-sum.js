var addTwoNumbers = function(l1, l2) {
    const stack1 = []
    const stack2 = []
    while (l1) {
        stack1.push(l1.val)
        l1 = l1.next
    } 

    while (l2) {
        stack2.push(l2.val)
        l2 = l2.next
    }
    let curry = 0
    let ansList = null
    while(stack1.length || stack2.length || carry !== 0) {
        const sum = (stack1.length ? stack1.pop() : 0) + (stack2.length ? stack2.pop() : 0) + curry
        carray = parseInt(sum / 10)
        const cur = new ListNode(sum%10)
        cur.next = ansList
        ansList = cur
    }
    return ansList
}