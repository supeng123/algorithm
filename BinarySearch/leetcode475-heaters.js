var heaters = function(houses, heaters) {
    houses.sort((a,b) => a-b)
    heaters.sort((a,b) => a-b)
    let dis = 0
    for (let i = 0; i < houses.length; i++) {
        let l = 0
        let r = heaters.length-1
        while (l  < r) {
            let mid = (r+l) >> 1
            if (heaters[mid] > houses[i]) {
                r = mid
            } else if (heaters[mid] < house[i]) {
                l = mid
            } else {
                l = mid
                r = mid
            }
        }
        const toLeft = Math.abs(houses[i] - heaters[l])
        const toRight = Math.abs(houses[i] - heaters[r])
        dis = Math.max(dis, Math.min(toLeft, toRight))
    }
    return dis
}