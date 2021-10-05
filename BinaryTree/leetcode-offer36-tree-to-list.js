var treeToList = function(root) {
    if (root === null) return
    let pre = null
    let head = null
    inOrder(root)
    head.left = pre
    pre.right = head
    return head

    function inOrder(cur) {
        if (cur === null) return 
        inOrder(cur.left)
        if (pre === null) {
            head = cur
        } else {
            pre.right = cur
        }
        cur.left = pre
        pre = cur
        inOrder(cur.right)
    }
}