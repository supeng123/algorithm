var isAdditiveNumber = function(num) {
    if (num.length < 3) return false
    let ans = false

    dfs('', '', num)

    return ans

    function dfs(first, second, rest) {
        if (first && second) {
            if (first.length > 1 && first[0] === '0' || second.length > 1 && second[0] === '0') return
            let sum = Number(first) + Number(second)
            if (rest.indexOf(sum) === 0) {
                rest = rest.substring(String(sum).length)
                if (rest.length === 0) ans = true
                dfs(second, sum, rest)
            }
        }

        for (let i = 1; i < Math.floor(rest.length/2)+1; i++) {
            first = rest.substring(0, i)
            let temp = rest.substring(i)
            for (let j = 1; j < Math.floor(temp.length/2)+1; j++) {
                second = temp.substring(0, j)
                let temp2 = temp.substring(j)
                dfs(first, second, temp2)
            }
        }
    }
    
}