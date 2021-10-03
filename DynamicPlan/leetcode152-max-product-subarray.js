var MaxProductSubarray = function(nums) {
    const minDp = []
    const maxDp = []
    let max = -Infinity
    minDp = maxDp = nums[0]
    for (let i = 1; i < nums.length; i++) {
        minDp[i] = Math.min(minDp[i], nums[i]*minDp[i-1], nums[i]*maxDp[i-1])
        maxDp[i] = Math.max(maxDp[i], maxDp[i-1]*nums[i], minDp[i-1]*nums[i])
        max = Math.max(maxDp[i], max)
    }
    return max
}