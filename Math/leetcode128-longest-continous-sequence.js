var longestContinousSequence = function(nums) {
    if (nums.length < 1) return 0
    nums.sort((a, b) => a-b)
    let max = 1
    let count = 1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i+1]) continue
        if (nums[i] + 1 === nums[i+1]){
            count++
        } else {
            count = 1
        }
        max = Math.max(count,max)
    }
    return max
}