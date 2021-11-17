var removeRepeat = function(nums) {
    let slow = 0
    for (let i = 2; i < nums.length; i++) {
        if (nums[slow] !== nums[i]) {
            nums[slow+2] = nums[i]
            slow++
        }
    }
    return slow+2
}