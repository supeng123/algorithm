var reorderPowerOfTwo = function(n) {
    function isPowerOfTwo(n) {
        return Number.isInteger(Math.log2(n))
    }
    function backTrack(nums, index, num, visited = new Set()) {
        if (index === nums.length) {
            if (isPowerOfTwo(num)) {
                return true
            }
        }
        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i-1] && !visited.has(i-1)) continue
            if (num === 0 && nums[i] === '0') continue
            visited.add(i)
            if (backTrack(nums, index+1, num*10+nums[i].charCodeAt()-'0'.charCodeAt(), visited)) return true
            visited.delete(i)
        }
        return false
    }
    const nums = Array.from(n+'')
    nums.sort()
    return backTrack(nums, 0, 0)
}