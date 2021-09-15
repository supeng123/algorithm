var sumOfOddSubarray = function(nums) {
    res = 0
    for (let i = 0; i < nums.length; i++) {
        res += calculate(nums.slice(i))
    }
    return res

    function calculate(arr) {
        let sum = 0
        let cur = 0
        for (let i = 0; i < arr.length; i++) {
            cur += arr[i]
            if (i % 2 === 0) {
                sum += cur
            }
        }
        return sum
    }
}