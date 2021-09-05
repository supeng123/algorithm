var twoSum = function(l1, l2) {
    const stack1 = []
    const stack2 = []
    while (l1 || l2) {
        if (l1) {
            stack1.push(l1)
            l1 = l1.next
        } 
        if (l2) {
            stack2.push(l2)
            l2 = l2.list
        } 
    }
    let head = null
    let left = 0
    while (stack1.length || stack2.length || left !== 0) {
        const val1 = stack1.length ? stack1.pop() : 0
        const val2 = stack2.length ? stack2.pop() : 0
        let sum = val1 + val2 + left
        const newNode = new ListNode(sum%10)
        left = sum > 9 ? 1 : 0
        newNode.next = head // pointer to  head
        head = newNode
    }
    return head
}