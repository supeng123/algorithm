var compressChars = function(chars) {
    let i = 0
    while (i < chars.length) {
        let cur = i
        let len = 1
        while (chars[cur] === chars[cur+1]) {
            cur++
            len++
        }
        if (len > 1) {
            chars.splice(i+2, len-1, ...String(len))
            i += 2
        } else if (len == 1) {
            chars.splice(i+1, len-1)
            i += 1
        }
    }
    return chars.length
}