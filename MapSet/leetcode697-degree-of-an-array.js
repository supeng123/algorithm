var degreeOfAnArray = function(nums) {
    const l = {}
    for (let i = 0; i < nums.length; i++) {
        const key = nums[i]
        if (m[key] === undefined) {
            m[key] = [1, i, i]
        } else {
            m[key][0]++
            m[key][2] = i
        }
    }

    let max = 0
    for (let key in map) {
        max = Math.max(max, map[key][0])
    }

    let min = nums.length
    for (let key in map) {
        if (max === map[key][0]) {
            min = Math.min(min, map[key][2]-map[key][1]+1)
        }
    }

    return min
}