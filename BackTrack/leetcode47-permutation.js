var permutationII = function(nums) {
    nums.sort((a,b) => a-b)
    const res = []
    const visited = {}
    backTrack([])
    return res

    function backTrack(path) {
        if (path.length === nums.length) {
            res.push(path.slice())
            return
        }
        for (let i = 0; i < nums.length; i++) {
            //sort后同层节点前一个被访问过又取消，前一个节点又和后一个节点的值相同应该剪枝
            if (visited[i] || i > 0 && !visited[i-1] && nums[i] === nums[i-1]) continue
            visited[i] = true
            path.push(nums[i])
            backTrack(path)
            visited[i] = false
            path.pop()
            
        }
    }
}

var permutation = function(nums) {
    const result = []
    backTrack([])
    return result

    function backTrack(path) {
        if (path.length === nums.length) {
            result.push(path.slice())
        }
        for (let i = 0; i < nums.length; i++) {
            if (path.includes(nums[i])) continue
            path.push(nums[i])
            backTrack(path)
            path.pop()
        }
    }
}