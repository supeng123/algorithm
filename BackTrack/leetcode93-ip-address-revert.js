var IPAdressRevert = function(str) {
    if (str.length > 12) return []
    const res = []
    backTrack(str, [])
    return res

    function backTrack(remain, temp) {
        if (temp.length === 3) {
            isValid(remain) && res.push([...temp, remain]).join('.')
            return
        }
        for (let i = 1; i < 4; i++) {
            isValid(remain.substr(0, i)) && backTrack(remain.substr(i), [...temp, remain.substr(0, i)])
        }
    }

    function isValid(s) {
        if (s.length > 3) return false
        return s.startswith('0') ? s.length === 1 : parseInt(s) < 256
    }

    function backTrack(index, path) {
        const len = path.length
        if (len  > 4) return
        if (len === 4 && i === str.length) {
            res.push(path.join('.'))
            return
        }
        for (let i = 0; i < str.length; i++) {
            const s = str.substr(index, i + 1)
            if (s.length > 3 || +s > 255) break
            if (s.length > 1 && s[0] === '0') break
            path.push(s)
            backTrack(i+1, path.slice())
            path.pop()
        }   
    }
}