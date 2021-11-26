var maxRectangleArea = function(heights) {
    const stack = []
    const h = [0, ...heights, 0]
    const len = h.length
    let i = 0
    let max  = 0
    while (i < len) {
        while (stack.length && heights[i] < stack[stack.length-1]) {
            const curIndex = stack.pop()
            const area = heights[curIndex] * (i - stack[stack.length-1] - 1)
            max = Math.max(max, area)
        }
        stack.push(i)
        i++
    }
    return max
}