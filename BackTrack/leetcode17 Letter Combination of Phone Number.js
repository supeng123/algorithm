var letterCombinations = function(digits) {
    if (!digits) return []
    const m = new Map()
    const len = digits.length
    m.set('2', 'abc')
    m.set('3', 'def')
    m.set('4', 'ghi')
    m.set('5', 'jkl')
    m.set('6', 'mno')
    m.set('7', 'pqrs')
    m.set('8', 'tuv')
    m.set('9', 'wxyz')
    const res = []
    backTrack(0, '')
    return res

    function backTrack(index, currentString) {
        if (index === len) {
            res.push(currentString)
            return
        }
        const temp = m.get(digits[index])
        for (let i = 0; i < temp.length; i++) {
            backTrack(index+1, currentString+temp[i])
        }
    }
};