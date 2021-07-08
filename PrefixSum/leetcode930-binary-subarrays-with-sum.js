var subarrayWithSum = function(nums, goal) {
    let preSum = 0
    let res = 0
    let m = {0:1}

    for (let i = 0; i < nums.length; i++) {
       preSum += nums[i]
       res += m[preSum-goal] || 0
       m[preSum] = (m[preSum] || 0) + 1
    }
    return res
}