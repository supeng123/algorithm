var isMatch = function(s, p) {
    function match(i, j) {
        if (i >= s.length && j >= p.length) {
            return 0
        }
        if (i < s.length && (s[i] == s[j] || s[j] === '?')) {
            return match(i+1, j+1)
        } else if (s[j] === '*') {
            while (s[j+1] === '*') {
                j += 1
            }
            for (k = i; k <= s.length; k++) {
                const result = match(k, j+1)
                if (result === 0) {
                    return 0
                } else if (result === 1) { //when k is larger than s.length but j is not at the tail
                    break
                }
            }
            return 1
        }
        return -1
    }
    return match(0, 0) === 0
}