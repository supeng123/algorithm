var sumEvenAfterQuery = function(A, queries) {
    let T = A.reduce((a,b) => b%2===0 ? a+=b : a+=0, 0)
    const ans = []
    for (let [value, index] of queries) {
        if (A[index]%2 === 0) T -= A[index]
        A[index] += value
        if (A[index]%2 === 0) T += A[index]
        ans[index] = T
    }
    return ans
}