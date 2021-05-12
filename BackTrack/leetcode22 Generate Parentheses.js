var generateParenthesis = function(n) {
    const res = []
    backTrack(n, n, '')
    return res

    function backTrack(leftRemain, rightRemain, concatString) {
        if (leftRemain === 0 && rightRemain === 0) {
            res.push(concatString)
            return
        }
        if (leftRemain) {
            backTrack(leftRemain-1, rightRemain, concatString+'(')
        }
        if (rightRemain > leftRemain) {
            backTrack(leftRemain, rightRemain-1, concatString+')')
        }
    }
};