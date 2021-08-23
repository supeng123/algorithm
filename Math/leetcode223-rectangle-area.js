var rectangleArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    const width = Math.min(bx2,ax2)-Math.max(bx1,ax1)
    const height = Math.min(by2,ay2)-Math.max(by1,ay1)
    const commonArea = Math.max(0, width) * Math.max(0, height)
    return (ax2-ax1)*(ay2-ay1) + (bx2-bx1)*(by2-by1) - commonArea
}