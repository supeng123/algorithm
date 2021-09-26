var partitionArray = function(nums) {
    let max = nums[0]
    let leftMax = nums[0]
    let pos = 0
    for (let i = 0; i < nums.length; i++) {
        max = Math.max(nums[i], max)
        if (nums[i] < leftMax) {
            leftMax = max
            pos = i
        }
    }
    return pos+1
}