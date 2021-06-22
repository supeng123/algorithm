var biggestBinaryTree = function(nums) {
    if (nums.length === 0) return null
    const max = Math.max(...nums)
    const index = nums.indexOf(max)
    const root = new TreeNode(max)
    root.left = biggestBinaryTree(nums.slice(0, index))
    root.right = biggestBinaryTree(nums.slice(index+1))
    return root
}