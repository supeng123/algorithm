var biggestTree = function(nums) {
    if (nums.length === 0) return null
    const val = Math.max(...nums)
    const root = new TreeNode(val)
    root.left = biggestTree(nums.slice(0, nums.indexOf(val)))
    root.right = biggestTree(nums.slice(nums.indexOf(val) + 1))
    return root
}