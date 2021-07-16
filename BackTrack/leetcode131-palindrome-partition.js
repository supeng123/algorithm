var partitioning = function(s) {
    const res = []
    backTrack(0, [])
    return res
    function backTrack(index, path) {
        if (index === s.length-1) {
            res.push(path)
            return
        }

        for(let i = index; i < s.length; i++) {
            if (!isPalindrome(index, i)) continue
            path.push(s.slice(index, i+1))
            backTrack(i+1, path.slice())
            path.pop()
        }
    }

    function isPalindrome(start, end) {
        let l = start
        let r = end
        while (l < r) {
            if (s[l++] !== s[r--]) return false
        }
        return true
    }
}