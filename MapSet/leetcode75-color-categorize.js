var colorCategorize = function(nums) {
    //桶排序
    const MaxNum = Math.max(...nums)
    const bucket = new Array(MaxNum).fill(0)
    for (const num of nums) {
        bucket[num] += 1
    }
    let start = 0
    for (let i = 0; i < bucket.length; i++) {
        while (bucket[i] > 0) {
            nums[start] = bucket[i]
            i--
            start++
        }
    }
}