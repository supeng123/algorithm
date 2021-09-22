var matchToSquare = function(nums) {
    const total = nums.reduce((a,b) => a+=b, 0)
    if (total%4) return false
    const average = total / 4
    const res = new Array(4).fill(0)
    return backTrack(0)

    function backTrack(index) {
        if (index === nums.length) {
            return res[0] === res[1] && res[1] === res[2] && res[2] === res[3]
        }
        for (let i = 0; i < 4; i++) {
            if (res[i] + nums[index] <= average) {
                res[i] = res[i] + nums[index]
                if (backTrack(index+1)) return true
                res[i] = res[i] - nums[index]
            }
        }
        return false
    }
}