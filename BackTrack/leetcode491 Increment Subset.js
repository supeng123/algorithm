var findSubsequences = function(nums) {
    const res = []
    const set = new Set()
    backTrack(0, [])
    return res
    
    function backTrack(index, path) {
        if (index > nums.length) return
        if (path.length > 1) {
            const c = path.join('')
            if (!set.has(c)) {
                res.push(path)
                set.add(c)
            }
        }
        for (let i = index; i < nums.length; i++) {
            if (path[path.length-1] > nums[i]) continue
            path.push(nums[i])
            backTrack(i+1, path.slice())
            path.pop()
        }
    }
}