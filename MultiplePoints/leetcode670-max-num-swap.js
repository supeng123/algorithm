var maxNumSwap = function(num) {
    const s = ''+num.split('')
    for (let i = 0; i < s.length; i++) {
        let max = i
        for (let j = i; j < s.length; j++) {
            if (s[j] >= s[max] && s[j] !== s[i]) {
                max = j
            }
        }
        if (i !== max) {
            swap(s, max, i)
            return s.join('')
        }
    }
    return s.join('')

    function swap(s, max, i) {
        const temp = s[i]
        s[i] = s[max]
        s[max] = temp
    }
}