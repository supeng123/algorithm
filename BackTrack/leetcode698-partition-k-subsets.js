var partitionKSubsets = function (nums, k) {
    const sum = nums.reduce((a,b) => a+=b, 0)
    if (sum%k) return false
    const target = sum/k
    const used = new Array(nums.length)
    return backTrack(k, 0, 0)

    function backTrack(k, buckets, index) {
        if (k === 0) return true
        if (buckets === target) {
            return backTrack(k-1, buckets, index)
        }
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue
            if (nums[i] + buckets > target) continue
            used[i] = true
            buckets += nums[i]
            if (backTrack(k, buckets, i+1)) {
                return true
            }
            used[i] = false
            buckets -= nums[i]
        }
        return false
    }
}