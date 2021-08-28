var linkListInsertSort = function(head) {
    const dummyNode = new ListNode(0)
    dummyNode.next = head
    let cur = head
    
    while (cur && cur.next) {
        if (cur.val <= cur.next.val) {
            cur = cur.next
        } else {
            const temp = cur.next //切断链表
            cur.next = cur.next.next

            let pre = dummyNode
            while (pre.next.val <= temp.val) { //后面指针先行
                pre = pre.next
            }
            temp.next = pre.next
            pre.next = temp
        }
    }
    return dummyNode.next
}