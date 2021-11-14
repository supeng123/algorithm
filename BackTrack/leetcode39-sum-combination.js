//leetcode39
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

//leetcode40
var sumCombination = function(nums, target) {
    const res = []
    const len = nums.length
    nums.sort((a,b) => a-b)
    backTrack([], target, 0)
    return res

    function backTrack(path, target, start) {
        if (target <= 0) {
            if (target === 0) res.push(path.slice())
            return
        }
        for (let i = start; i < len; i++) {
            if (i > start && nums[i] === nums[i-1]) continue // 同层节点如果值相同重复减掉
            path.push(nums[i])
            backTrack(path, target - nums[i], i+1)
            path.pop()
        }
    }
}

//leetcode216
var sumCombination = function(k, n) {
    const res = []
    backTrack([], target, 1)
    return res

    function backTrack(path, target, start) {
        if (path.length === k) {
            if (target === 0) res.push(path.slice())
            return
        }
        for (let i = start; i <= n; i++) {
            path.push(nums[i])
            backTrack(path, target - nums[i], i+1)
            path.pop()
        }
    }
}