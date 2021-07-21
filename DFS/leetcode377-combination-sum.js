var combinationSum = function(nums, target) {
    nums.sort((a,b) => a-b)
    const memo = new Map()
    const count = dfs(target)
    return count

    function dfs(target) {
        if (target < 0) return 0
        if (target === 0) return 1
        if (memo.has(target)) return memo.get(target)
        let res = 0
        for (let i = 0; i < nums.length; i++) {
            res += dfs(target-nums[i])
        }
        memo.set(target, res)
        return res
    }
}