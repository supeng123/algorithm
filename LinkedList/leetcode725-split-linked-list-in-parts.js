var splitLinkedListInParts = function(head, k) {
    let len = 0
    let c = head
    while (head) {
        len++
        head = head.next
    }
    const itemLen = Math.floor(len/k)
    const mod = len%k

    const res = []
    let cur = head
    for (let i = 0; i < k; i++) {
        res[i] = cur
        const plus = mod > i ? 1: 0
        const singleList = plus+itemLen
        while (singleList > 1) {
            cur = cur.next
            singleList--
        }
        if (cur) {
            const temp = cur.next
            cur.next = null
            cur = temp
        }
    }

    return res
}