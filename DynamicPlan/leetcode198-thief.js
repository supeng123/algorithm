var rob = function(nums) {
    if (nums.length === 0) return 0
    if (nums.length === 1) return nums[0]
    let first = nums[0]
    let second = Math.max(nums[0], nums[1])
    for (let i = 2; i < nums.length; i++) {
        [first, second] = [second, Math.max(nums[i], nums[i]+first)]
    }
    return second
}