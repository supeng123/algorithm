var findMinArrowShots = function(points) {
    if (points.length < 2) return points.length
    points.sort((a,b) => a[1]-b[1])
    let pre = points[0][1]
    let count = 1
    for (let point of points) {
        if (point[0] > pre) {
            count++
            pre = point[1]
        }
    }
    return count
}