var countArrangement = function(n) {
    const visited = new Array(n + 1).fill(false)
    let count = 0
    backTrack(1)
    return count

    function backTrack(index) {
        if (index > n) {
            count++
            return
        }
        for (let i = index; i <= n; i++) {
            if (!visited[i] && (i%index == 0 || index%i === 0)) {
                visited[i] = true
                backTrack(index+1)
                visited[i] = false
            }
        }
    }
};