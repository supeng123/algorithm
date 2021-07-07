var countGoodMeals = function(deliciousness) {
    let count = 0
    const m = new Map()

    for (let dish of deliciousness) {
        for (let i = 1; i < 22; i++) {
            const target = Math.pow(2, i)
            if (m.has(target-dish)) {
                count += m.get(target-dish)
            }
        }
        m.set(dish, (m.get(dish) || 0 + 1))
    }

    return count%(10**9+7)

}