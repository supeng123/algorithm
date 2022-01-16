function TreeNode (id) {
    this.id = id
    this.parent = null
    this.children = []
    this.lockStatus = 0
    this.lockUser = 0
}

var LockingTree = function(parent) {
    const nodeMap = {}
    for (let i = 0; i < parent.length; i++) {
        nodeMap[i] = new TreeNode(i)
    }
    for (let i = 1; i < parent.length; i++) {
        const node = nodeMap[i]
        const pNode = nodeMap[parent[i]]
        node.parent = pNode
        pNode.children.push(node)
    }
    this.nodeMap = nodeMap
}

LockingTree.prototype.lock = function(num, user) {
    const node = this.nodeMap[num]
    if (node.lockStatus === 0) {
        node.lockStatus = 1
        node.lockUser = user
        return true
    }
    return false
}

LockingTree.prototype.unlock = function(num, user, force) {
    const node = this.nodeMap[num]
    if (force || (node.lockStatus === 1 && node.lockUser === user)) {
        node.lockUser = 0
        node.lockStatus = 0
        return true
    }
    return false
}

LockingTree.prototype.upgrade = function(num, user) {
    const node = this.nodeMap[num]
    if (node.lockStatus != 0 || !someChildLocked(node) || !everyParentUnlocked(node)) {
        return false
    }
    const freeChildren = (n) => {
        if (!node) return
        this.unlock(n.id, user, true)
        for (let child of n.children) {
            freeChildren(child)
        }
    }

    freeChildren(node)
    this.lock(num, user)
    return true
}

LockingTree.prototype.someChildLocked = function(node) {
    return node.children.some(n => dfs(n))

    function dfs(node) {
        if (!node) return false
        if (node.lockStatus === 1) return true
        return node.children.some(n => dfs(n))
    }
}

LockingTree.prototype.everyParentUnlocked = function(node) {
    while (node) {
        if (node.lockStatus === 1) return false
        node = node.parent
    }
    return false
}