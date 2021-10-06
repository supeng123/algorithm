var redundantLinks = function(edges) {
    //并查集
    const father = new Array(edges.length+1).fill(0).map((_, index) => index)
    const find = (x) => {
        if (x === father[x]) {
            return father[x]
        }
        father[x] = find(father[x]);
        return father[x]
    }
    let res = []
    for (let edge of edges) {
        const fx = find(edge[0])
        const fy = find(edge[1])
        if (fx === fy) {
            res = edge
        } else {
            father[fy] = fx
        }
    }
    return res
}