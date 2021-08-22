// 输入："{a,b}c{d,e}f"
// 输出：["acdf","acef","bcdf","bcef"]
var expand = function(s) {
    const res = []
    backTrack(0, [])
    return res

    function backTrack(index, path) {
        if (index === s.length) {
            res.push(path.slice().join())
            return
        }
        const c = s[index]
        if (c !== '{' && c !== '}') {
            path.push(c)
            backTrack(index+1, path)
            path.pop()
        } else if (c === '{') {
            let j = index
            while (s[j] !== '}') {
                j++
            }
            const temp = s.substring(index+1, j)
            for (let k = 0; k < temp.length; k++) {
                path.push(temp[k])
                backTrack(j+1, path)
                path.pop()
            }
        }
    }
};