var shortestSubarrayAfterDeletion = function(arr) {
    let len = arr.length
    let left = 1
    while (left < len && arr[left] >= arr[left-1]) {
        left++
    }
    if (left === len) return 0
    let right = len - 1
    while (right > 0 && arr[right] >= arr[right-1]) {
        right--
    }
    let result = right - left
    let start = 0
    let end = right
    while ( start < left && end < len) {
        if (arr[start] > arr[end]) {
            end++
            result++
        }
        start++
    }
    return result
}