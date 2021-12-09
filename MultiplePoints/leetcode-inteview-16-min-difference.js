function leastDifference(arr1,arr2) {
    arr1.sort((a,b)=>a-b)
    arr2.sort((a,b)=>a-b)
    let res
    let m = 0
    let n = 0
    while (m < arr1.length && n < arr2.length) {
        res = Math.min(res, Math.abs(arr1[m]-arr2[n]))
        if (arr1[m] < arr2[n]) {
            m++
        } else {
            n++
        }
    }
    return res
}