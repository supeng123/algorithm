var minSubarrayLen = function(target, nums) {
    let left  = 0
    let res = Infinity
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        while (sum >= target) {
            res = Math.min(res, i-left+1)
            sum -= nums[left]
            left++
        }
    }
    return res === Infinity ? 0 : res
}