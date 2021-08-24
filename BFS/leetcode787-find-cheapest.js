var findCheapestPrice = function(n, flights, src, dst, k) {
    const map = new Map()
    flights.forEach(f => {
        const [start, end, price] = f
        if (!map.has(start)) {
            map.set(start, [])
        }
        map.get(start).push([end, price])
        map.set(start, m.get(start))
    })
    const queue = [{from: src, price:0}]
    const minPrice = new Array(n).fill(Infinity)
    let count = 0
    let ans = Infinity
    
    while(queue.length) {
        if (count > k) break
        const size = queue.length
        for (let i = 0; i < size; i++) {
            const {from, price} = queue.shift()
            const nextList = map.get(from) || []
            for (let [nextEnd, nextPrice] of nextList) {
                const total = price + nextPrice
                if (nextEnd === dst) {
                    ans = Math.min(ans, total)
                    continue
                }
                if (minPrice[nextEnd] > total) {
                    minPrice[nextEnd] = total
                    queue.push({nextEnd, total})
                }
            }
        }
        count++
    }

    return ans === Infinity ? -1 : ans
}