var ThroneInheritance = function(king) {
    this.king = king
    this.death = new Set()
    this.inheritances = new Map()
}

ThroneInheritance.prototype.death = function(deathPeople) {
    this.death.add(deathPeople)
}

ThroneInheritance.prototype.birth = function(father, son) {
    if (!this.inheritances.has(father)) {
        this.inheritances.set(father, [])
    }
    this.inheritances.get(father).push(son)

}

ThroneInheritance.prototype.getThroneInheritanceOrder = function() {
    const res = []
    preOrder(this.king)
    return res

    function preOrder(name) {
        if (!this.death.has(name)) {
            res.push(name)
        }
        if (this.inheritances.has(name)) {
            for (let children of this.inheritances.get(name)) {
                preOrder(children)
            }
        }
    }
}