var longestMountain = function(arr) {
    let sum = 0
    let index = 0
    while (index < arr.length) {
        let up = 0
        let down = 0
        while (arr[index]<arr[index+1]) {
            up++
            index++
        }
        while (arr[index]>arr[index+1]) {
            down++
            index++
        }
        if (!up && !down) index++
        if (up && down && up+down >= 2) sum = Math.max(sum, up+down+1)
    }
    return sum
}