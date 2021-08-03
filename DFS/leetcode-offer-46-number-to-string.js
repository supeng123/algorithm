var numToStr = function(n) {
    const ch = n.toString()
    return dfs(0)

    function dfs(index) {
        if (index >= ch.length) {
            return 1
        }
        const num = Number(ch[index]+ch[index+1])
        if (num > 9 && num < 26) {
            return dfs(index+1) + dfs(index+2)
        } else {
            return dfs(index+1)
        }
    }
}