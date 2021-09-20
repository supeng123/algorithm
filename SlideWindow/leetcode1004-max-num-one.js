var MaxNumberOne = function(nums, k) {
    let left = 0
    let right = 0
    let zero = 0
    let maxLength = 0
    while (right < nums.length) {
        if (nums[right] === 0) zero++

        while (zero > k) {
            if (nums[left] === 0) zero--
            left++
        }

        right++
        maxLength = Math.max(maxLength, right - left)
    }
    return maxLength
}