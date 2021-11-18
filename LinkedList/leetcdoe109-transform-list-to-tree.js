var transformListToTree = function(head) {
    const list = []
    while (head) {
        list.push(head.val)
        head = head.next
    }
    return buildTree(list)

    function buildTree(list) {
        if (list.length == 0) return null
        let mid = list.length >> 1
        let root = new TreeNode(list[mid])
        root.left = mid < 0 ? null : buildTree(list.slice(0, mid))
        root.right = mid > list.length-1 ? null : buildTree(list.slice(mid+1))
        return root
    }

    
}