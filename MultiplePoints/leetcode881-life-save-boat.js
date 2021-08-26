var RescureBoats = function(people, limit) {
    let left = 0
    let right = people.length - 1
    let res = 0
    people.sort((a,b) => a - b)
    while (left <= right) {
        if (people[left] + people[right] <= limit) {
            left++
        }
        right--
        res++
    }
    return res
}