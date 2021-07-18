var getDeletePoints = function(nums) {
    const max = Math.max(...nums)
    const m = new Array(max+1).fill(0)
    for (let i = 0; i < nums.length; i++) {
        if (m[nums[i]] === undefined) {
            m[nums[i]] = 0
        }
        m[nums[i]] += nums[i]
    }
    let first = m[0]
    let second = m[1]
    for (let i = 2; i < m.length; i++) {
        [first, second] = [second, Math.max(m[i]+first, second)]
    }
    return second
}