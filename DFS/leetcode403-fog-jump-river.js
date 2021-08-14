var fogJumpRiver = function(stones) {
    
    return dfs(stones, 0, 0, new Set())
    
    function dfs(stones, index, k, set) {
        const key = index*1000+k
        if (set.has(key)) {
            return false
        } else {
            set.add(key)
        }
        for (let i = index+1; i < stones.length; i++) {
            const gap = stones[i] - stones[index]
            if (gap >= k-1 && gap <= k+1) {
                if (dfs(stones, i, gap, set)) {
                    return true
                }
            } else if (gap > k+1) {
                break
            }
        }
        return index === stones.length-1
    }
}