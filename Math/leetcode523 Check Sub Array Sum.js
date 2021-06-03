var checkSubArraySum = function (nums, k) {
    //prefix sum
    let sum = 0
    const m = new Map()
    Map.set(0, -1)
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        let l = k === 0 ? sum : sum%k
        if (m.has(l)) {
            if (i - m.get(l) > 1) {
                return true
            }
        } else {
            m.set(l, i)
        }
    }
    return false
}