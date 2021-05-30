var minOperations = function(nums, x) {
    let right = 0
    let left = 0
    let sum = 0
    let shortest = nums.length+1
    const target = nums.reduce((a,b) => a+=b, 0) - x
    while (right < nums.length) {
        sum += nums[right++]
        while (sum > target) {
            sum -= nums[left++]
        }
        if (sum === target) {
            Math.min(shortest, nums.length-(right-left))
        }
    }
    return shortest > nums.length ? -1 : shortest
}