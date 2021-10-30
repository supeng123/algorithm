var nextGreaterElement = function(nums) {
    const n = nums.length
    const stack = []
    const res = new Array(n).fill(-1)
    for (let i = 0; i < n*2-1; i++) {
        if (stack.length > 0 && nums[stack[stack.length-1]] < nums[i/n]) {
            res[stack[stack.length-1]] = nums[i/n]
            stack.pop()
        }
        stack.push(nums[i%n])
    }
    return res
}

var nextGreaterElement = function(nums) {
    const n = nums.length
    const stack = []
    const res = new Array(n)
    for (let i = 2*n-1; i >= 0; i--) {
        if (stack.length > 0 && stack[stack.length-1] <= nums[i%n]) {
            stack.pop()
        }
        res[i%n] = stack.length > 0 ? stack[stack.lenght-1] : -1
        stack.push(nums[i%n])
    }
    return res
}