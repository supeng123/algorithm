var longestHarmoniousSubsequence = function (nums) {
    const m = {}
    let max = 0
    for (let i = 0; i < nums.length; i++) {
        if (m[nums[i]] === undefined) {
            m[nums[i]] = 0
        }
        m[nums[i]]++
    }

    for (let key of m) {
        if (m[key+1]) {
            let temp = m[key]+m[key+1]
            max = Math.max(temp, max)
        }
    }
    return max
}