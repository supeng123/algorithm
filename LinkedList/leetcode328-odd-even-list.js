var oddEvenList = function(head) {
    const dummyHeadOdd = {
        next: head
    }
    const dummyHeadEven = {
        next: head
    }
    let odd = dummyHeadOdd.next
    let even = dummyHeadEven.next.next
    while (odd && odd.next && even && even.next) {
        let oddNext = odd.next.next
        let evenNext = even.next.next
        odd.next = oddNext
        even.next = evenNext
        odd = oddNext
        even = evenNext
    }
    odd.next = dummyHeadEven.next
    return dummyHeadOdd.next
}