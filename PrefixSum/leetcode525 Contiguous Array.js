var contiguousArray = function(nums) {
    //prefix sum
    let max = 0
    let pres = 0
    const m = new Map()
    m.set(0, -1)

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            pres++
        } else {
            pres--
        }
        if (m.has(pres)) {
            max = Math.max(max, i-m.get(pres))
        } else {
            m.set(pres, i)
        }
    }
    return max
}