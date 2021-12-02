var CBTInserter = function(root) {
    this.root = root
    this.queue = [root]
}

CBTInserter.prototype.insert = function(v) {
    const newNode = new TreeNode(v)
    while (this.queue[0] && this.queue[0].left && this.queue.right) {
        this.queue.push(this.queue[0].left)
        this.queue.push(this.queue[0].right)
        this.queue.shift()
    }
    if (!this.queue[0].left) {
        this.queue[0].left = newNode
    } else {
        this.queue[0].right = newNode
    }
    return this.queue[0].val
}

CBTInserter.prototype.getRoot = function() {
    return this.root
}