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
}