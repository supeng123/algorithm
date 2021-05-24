var subsetI = function(nums) {
    const result = []
    backTrack([], 0)
    return result
    
    function backTrack(tempPath, start) {
        result.push(tempPath)
        for (let i = start ;i < nums.length; i++) {
            tempPath.push(nums[i])
            backTrack(tempPath.slice(), i+1)
            tempPath.pop()
        }
    }
}

var subsetII = function(nums) {
    nums.sort((a,b) => a-b)
    const res = []
    backTrack([], 0)
    return res

    function backTrack(path, start) {
        res.push(path)
        if (path.length === nums.length) return
        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i-1]) continue
            path.push(nums[i])
            backTrack(path.slice(), i+1) //is not start+1
            path.pop()
        }
    }
}