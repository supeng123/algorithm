var pancakeSort = function(arr) {
    const res = []
    recursive(arr, arr.length)
    return res

    function recursive(arr, n) {
        let maxIndex
        let maxValue = 0
        for (let i = 0; i < n; i++) {
            if (arr[i] > maxValue) {
                maxValue = arr[i]
                maxIndex = i
            }
        }
        res.push(i+1)
        reverse(arr, 0, i)
        res.push(n)
        reverse(arr, i, n-1)

        recursive(arr, n-1)
    }

    function reverse(arr, i, j) {
        while (i < j) {
            temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
            i++
            j--
        }
    }
}