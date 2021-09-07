var pattern = function(arr) {
    let mid = -Infinity
    const stack = []
    for (let i = arr.length-1; i >= 0; i--) {
        if (arr[i] < mid) return true
        while (stack.length > 0 && stack[stack.length-1] < arr[i]) {
            mid = stack.pop()
        }
        stack.push(arr[i])
    }
    return false
}