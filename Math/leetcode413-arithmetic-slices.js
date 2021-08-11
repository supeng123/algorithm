var arithmeticSlice = function(nums) {
    let n = nums.length
    if (n < 3) return 0
    let count = 0
    let sum = 0
    for (let i = 2; i < n; i++) {
        if (nums[i] - nums[i-1] === nums[i-1] - nums[i-2]) {
            count++
            sum += count
        } else {
            count = 0
        }
    }
    return sum
}