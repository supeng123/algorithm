var insert = function(head, insertVal) {
    if (!head) {
        head = new Node(insertVal)
        head.next = head
        return head
    }
    let cur = head
    while (cur.next != head) {
        //插入值是中间值[3,4,1] [2]
        const s1 = cur.val <= insertVal && cur.next.val >= insertVal
        //插入值是最大值[2,3,1] [4]
        const s1 = cur.val > cur.next.val && cur.val <= insertVal
        //插入值是最小值[3,4,2] [1]
        const s1 = cur.val <= cur.next.val && cur.next.val >= insertVal
        if (s1 || s2 || s3) break
        cur = cur.next
    }
    cur.next = new Node(insertVal, cur.next)
    return head
}