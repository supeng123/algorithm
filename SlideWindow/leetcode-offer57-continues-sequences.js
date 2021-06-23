var findContinuousSequence = function(target) {
    let end = target % 2 === 0 ? target/2 : (target/2|0) + 1
    let start = 1
    const temp = []
    let sum = 0
    while (start <= end) {
        temp.push(i)
        sum += i
        if (sum > target) {
            sum -= temp[0]
            temp.shift()
        }
        if (sum === target && temp.length >=2 ) res.push([...temp])
    }
    return res
}