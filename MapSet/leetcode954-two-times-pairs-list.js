var twoTimesPairsList = function(nums) {
    const m = {}
    for (let num of nums) {
        if (m[num] === undefined) {
            m[num] = 0
        }
        m[num]++
    }
    nums.sort((a,b) => Math.abs(a) - Math.abs(b))
    for (let i = 0; i < nums.length; i++) {
        let cur = nums[i]
        if (m[cur] === 0) {
            continue
        } else if (!m[2*cur] || m[2*cur] == 0) {
            return false
        } else {
            m[cur] = m[cur]--
            m[2*cur] = mm[2*cur]--
        }
    }
    return true
}