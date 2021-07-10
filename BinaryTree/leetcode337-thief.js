var thief = function(root) {
    const memo = {}
    return dfs(root)

    function dfs(node) {
        if (!node) return 0
        if (memo[node]) return memo[node]
        let excludedSum = node.val
        if (node.left) {
            excludedSum = excludedSum + dfs(node.left.left) + dfs(node.left.right)
        }
        if (node.right) {
            excludedSum = excludedSum + dfs(node.right.left) + dfs(node.right.right)
        }
        const noExcludeSum = dfs(node.left) + dfs(node.right)
        const max = Math.max(noExcludeSum, excludedSum)
        memo[node] = max
        return max
    }
}