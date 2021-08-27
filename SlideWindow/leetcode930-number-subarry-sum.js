var numSubarraySum = function(nums, goal) {
    let len = nums.length
    let left = 0
    let right = 0
    let sum = 0
    let res = 0
    while (right < len) {
        sum += nums[right]
        while (sum > goal) {
            sum -= nums[left]
            left++
        }

        if (sum === goal) {
            let tempL = l
            let tempSum = sum
            while (tempL <= right) {
                if (tempSum === goal) res++
                tempSum -= tempSum[tempL]
                tempL++
            }
        }
        right++
    }
    return res
}