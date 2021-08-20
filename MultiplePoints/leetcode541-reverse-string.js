var reverseString = function(s, k) {
    const n = s.length
    const strList = Array.from(s)
    for (let i = 0; i < s.length; i += 2*k) {
        reverse(strList, i, Math.min(i+k, n)-1)
    }

    function reverse(arr, left, right) {
        while (left < right) {
            const temp = arr[left]
            arr[left] = arr[right]
            arr[right] = temp
            left++
            right--
        }
    }
}