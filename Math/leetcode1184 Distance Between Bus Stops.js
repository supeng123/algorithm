var distanceBetweenBusStops = function (distance, start, destination) {
    let dist = 0
    let sum = 0
    for (let i = 0 ;i < distance.length; i++) {
        sum += distance[i]
        if (i >= Math.min(start, destination) && i < Math.max(start, destination)) {
            dist += distance[i]
        }
    }
    return Math.min(dist, sum - dist)
}