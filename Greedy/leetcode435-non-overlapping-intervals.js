var nonOverlappingIntervals = function(intervals) {
    intervals.sort((a,b) => a[1]-b[1])
    let right = intervals[0][1]
    let counts = 1
    for (let i = 1; i < intervals.length; i++) {
        if (right <= intervals[i][0]) {
            counts++
            right = intervals[i][1]
        }
    }
    return intervals.length-counts
}