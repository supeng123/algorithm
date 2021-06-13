var kokoEatingBananas = function(piles, H) {
    let eatHour = (k) => piles.reduce((a,b) => a += Math.ceil(b/k), 0)

    let l = 1
    let r = Math.max(...piles)
    while (l < r) {
        let mid = l + (r-l)/2
        if (eatHour(mid) > H) {
            l = mid+1
        } else {
            r = mid
        }
    }
    return l
}