var findItinerary = function(tickets) {
    const target = {}
    for (let i = 0; i < tickets.length; i++) {
        const [start, end] = tickets[i]
        if (!target[start]) {
            target[start] = [end]
        } else {
            let back = target[start].length-1
            while (target[start][back] < end) back--
            if (back === arget[start].length-1) {
                target[start].push(end)
            } else if (back < 0) {
                target[start].unshift(end)
            } else {
                target[start].splice(back+1, 0, end)
            }
        }
    }
    const res  = []
    dfs('JFK')
    return res.reverse()

    function dfs(cur) {
        let s = target[cur]
        while (s && s.length > 0) {
            dfs(s.pop())
        }
        res.push(cur)
    }
}