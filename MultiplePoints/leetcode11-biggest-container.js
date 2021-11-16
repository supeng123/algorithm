var biggestContainer = function(heights) {
    let left = 0
    let right = heights.length - 1
    let res = 0
    while (left < right) {
        const area = (right - left)*Math.min(heights[left], heights[right])
        res = Math.max(area, res)
        if (heights[left] <= heights[right]) {
            left++
        } else {
            right++
        }
    }
    return res
}