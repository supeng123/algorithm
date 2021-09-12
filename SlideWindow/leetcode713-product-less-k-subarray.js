var productLessKSubarray = function(nums, k) {
    let count = 0
    let left = 0
    let right = 0
    let product  = 1
    while (right < nums.length) {
        product *= nums[right++]
        if(product >= k && left < right) {
            product /= nums[left++]
        }
        count += right-left
    }
    return count
}