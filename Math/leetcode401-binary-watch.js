var binaryWatch = function(n) {
    const res = []
    for (let i = 0; i < 12; i++) {
        for (let j = 0; j < 60; j++) {
            if (i.toString(2).split('0').join('').length + j.toString(2).split('0').join('').length === n) {
                res.push(i+":"+(j < 0 ? "0" : "")+ m)
            }
        }
    }
    return res
}