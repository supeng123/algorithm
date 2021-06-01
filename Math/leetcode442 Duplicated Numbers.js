var findDuplicates = function(nums) {
    const res  = []
    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i]
        if (nums[cur-1] < 0) {
            res.push(cur)
        } else {
            nums[cur-1] *= -1
        }
    }
    return res
}