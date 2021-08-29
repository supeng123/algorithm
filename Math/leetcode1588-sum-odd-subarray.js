var sumOddSubarray = function(nums) {
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += cal(nums.slice(i))
    }
    return sum

    function cal(list) {
        let res = 0
        let total = 0
        for (let i = 0; i < list.length; i++) {
            res += list[i]
            if (i%2 === 0) total += res
        }
        return total
    }
}