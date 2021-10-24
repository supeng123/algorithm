let shoppingOffers = function(prices, gifts, needs) {
    let res = Infinity
    return backTrack(needs, 0)

    function backTrack(needs, price) {
        let cur = needs.reduce((price, c, index) => price += c*prices[index], price)
        res = Math.min(res, cur)
        if (cur === price) return

        for (let i = 0; i < gifts.length; i++) {
            const gift = gifts[i]
            if (needs.every((need, index) => need > gift[index])) {
                needs.forEach((need, index) => need -= gift[index])
                backTrack(needs, price+gift[gift.length-1])
                needs.forEach((need, index) => need += gift[index])
            }
            
        }
    }
}