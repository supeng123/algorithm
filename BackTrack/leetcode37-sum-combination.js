//leetcode37
var sumCombination = function(nums, target) {
    const res = []
    const len = nums.length
    backTrack([], target, 0)
    return res

    function backTrack(path, target, start) {
        if (target <= 0) {
            if (target === 0) res.push(path.slice())
            return
        }
        for (let i = start; i < len; i++) {
            path.push(nums[i])
            backTrack(path, target - nums[i], i)
            path.pop()
        }
    }
}