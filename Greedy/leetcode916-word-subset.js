var wordSubsets = function(A, B) {
    const check = new Array(26).fill(0)
    const res = []
    for (let i = 0; i < B.length; i++) {
        const temp = new Array(26).fill(0)
        for (let j = 0; j < B[i].length; j++) {
            temp[B[i][j].charCodeAt()-97]++
        }
        for (let k = 0; k < 26; k++) {
            check[k] = Math.max(check[k], temp[k])
        }
    }

    for (let i = 0; i < A.length; i++) {
        const temp = new Array(26).fill(0)
        let isRight = true
        for (let j = 0; j < A[i].length; j++) {
            temp[A[i][j].charCodeAt()-97]++
        }
        for (let k = 0; k < 26; k++) {
            if (temp[k] < check[k]) {
                isRight = false
                break
            }
        }
        isRight && res.push(A[i])
    }
    return res
}