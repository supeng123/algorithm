var BabeNames = function(names, synonyms) {
    const res  = []
    const hash = {}
    const uf = new UnionFind()
    for (let n of names) {
        let name = n.split(')')[0]
        uf.makeSet(name)
    }
    for (let s of synonyms) {
        const first = s.split(',')[0].slice(1)
        const second = s.split(',')[1].slice(0,-1)
        uf.makeSet(first)
        uf.makeSet(second)
        uf.unite(first, second)
    }
    for (let n of names) {
        let name = n.split('(')[0]
        let rootName = uf.findSet(name)
        let frequency = +(n.split('(')[1].slice(0, -1))
        hash[rootName] = (hash[rootName] || 0) + Number(frequency)
    }

    for (let key in hash) {
        res.push(`${key}(${hash[key]})`)
    }
    return res
}


class UnionFind {
    constructor() {
        this.parents = {}
    }

    makeSet(x) {
        this.parents[x] = x
    }

    findSet(x) {
        while (this.parents[x] !== x) {
            x = this.parents[x]
        }
        return x
    }

    union(x, y) {
        const newX = thi.findSet(x)
        const newY = this.findSet(y)
        if (newX === newY) return
        if (newX > newY) {
            this.parents[newX] = newY
        } else {
            this.parents[newY] = newX
        }
    }
}