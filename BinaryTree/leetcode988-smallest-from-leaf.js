var smallestFromLeaf = function(root) {
    let flag = false
    dfs(root, '')
    return flag

    function dfs(node, str) {
        if (!node) return ''
        let newString = String.fromCharCode(node.val+65).toLowerCase() + str
        if (node.left === null && node.right === null) {
            if (flag === false || newString.localeCompare(flag) < 0) {
                flag = newString
            }
        }
        dfs(node.left, newString)
        dfs(node.right, newString)
    }
}