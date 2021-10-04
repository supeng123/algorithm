var closestCommonAncestorI = function(root, p, q) {
    //binary tree
    if ((root.val - p.val) * (root.val - q.val) <= 0) return root
    if (p.val < root.val) return closestCommonAncestorI(root.left, p, q)
    return closestCommonAncestorI(root.right, p, q)
}

var closestCommonAncestorII = function(root, p, q) {
    //tree
    if (!root || root === p || root === q) return root
    const left = closestCommonAncestorII(root.left, p, q)
    const right = closestCommonAncestorII(root.right, p, q)
    if (left && right) return root
    return left ? left : right
}