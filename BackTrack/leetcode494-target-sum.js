var targetSum = function(nums, S) {
    let count = 0
    backTrack(0, 0)
    return count

    function backTrack(index, sum) {
        if (index === nums.length) {
            if (sum === S) count++
            return
        } else {
            backTrack(index+1, sum+nums[index])
            backTrack(index+1, sum-nums[index])
        }
    }
}