var miniNumEffortPath = function(heights) {
    //并查集
    const m = heights.length
    const n = heights[0].length
    const edges = []
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const id = i * n + j
            if (i > 0) {
                edges.push([id-n, id, Math.abs(heights[i][j]-heights[i-1][j])])
            }
            if (j > 0) {
                edges.push([id-1, id, Math.abs(heights[i][j]-heights[i][j-1])])
            }
        }
    }
    edges.sort((a,b) => a[2]-b[2])
    const uf = new UnionFind(m*n)
    let res = 0
    for (const edge of edges) {
        uf.unite(edge[0], edge[1])
        if (uf.isConnected(0, m*n-1)) {
            res = edge[2]
            break
        }
    }
    return res
}

class UnionFind {
    constructor(len) {
        this.parent = new Array(len).fill(0).map((_, index) => index)
        this.size = new Array(len).fill(1)
        this.setCount = len
    }

    findSet(x) {
        if (this.parent[x] === x) {
            return this.parent[x]
        }
        this.parent[x] = this.findSet(this.parent[x])
        return this.parent[x]
    }

    unite(a, b) {
        let x = this.findSet(a)
        let y = this.findSet(b)
        if (x === y) return false
        if (this.size[x] < this.size[y]) {
            [x, y] = [y, x]
        }
        this.parent[y] = x
        this.size[x] += this.size[y]
        this.setCount -= 1
        return true
    }

    isConnected(a, b) {
        let x = this.findSet(a)
        let y = this.findSet(b)
        return x === y
    }
}