var validTriangles = function(nums) {
    nums.sort((a,b)=>a-b)
    let n = nums.length
    let res = 0

    for (let i = n-1; i >=2; i--) {
        let l = 0
        let r = i-1
        while (l < r) {
            if (nums[l]+nums[r]>nums[i]) {
                res += r-l
                r--
            } else {
                l++
            }
        }
    }
    return res
}