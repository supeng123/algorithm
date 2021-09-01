var singleElement = function(arr) {
    const m = new Map()
    for (let i = 0; i < arr.length; i++) {
        if (m.has(arr[i])) {
            m.delete(arr[i])
        } else {
            m.set(arr[i], 1)
        }
    }
    return m.keys()[0]
}