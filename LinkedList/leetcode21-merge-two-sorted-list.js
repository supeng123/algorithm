var mergeTwoSortedList = function(A, B) {
    if (A == null) return B
    if (B == null) return A
    if (A.val < B.val) {
        A.next = mergeTwoSortedList(A.next, B)
        return A
    } else {
        B.next = mergeTwoSortedList(A, B.next)
        return B
    }
}