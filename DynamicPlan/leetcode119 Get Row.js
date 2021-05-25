var getRow = function(rowIndex) {
    const res = []
    for (let i = 0; i <= rowIndex; i++) {
        const temp = []
        for (let j = 0; j <= i; j++) {
            if (j > 0 && j < i) {
                temp[j] = res[i-1][j-1] + res[i-1][j]
            } else {
                temp[j] = 1
            }
        }
        res.push(temp)
    }
    return res[rowIndex]
}