var nonDecreasingList = function (nums) {
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i+1]) {
            nums[i-1] > nums[i+1] && (nums[i+1] = nums[i])
            count++
            if (count >= 2) return false
        } 
    }
    return true
}