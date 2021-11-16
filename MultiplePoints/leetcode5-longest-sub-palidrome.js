var longestSubPalidrome = function(s) {
    let maxLen = 0
    let start = 0
    for (let i = 0; i < s.length; i++) {
        checkPalidrom(i, i+1)
        checkPalidrom(i-1, i+1)
    }

    return s.substring(start, start+maxLen)

    function checkPalidrom(left, right) {
        while (left >=0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > maxLen) {
                maxLen = right-left+1
                start = left
            }
            left--
            right++
        }
    }
}