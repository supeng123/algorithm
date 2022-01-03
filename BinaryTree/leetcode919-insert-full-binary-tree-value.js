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

var CBTInserter = function(root) {
    this.root = root
    this.queue = []
    const q = [root]

    while(q.length) {
        let cur = q.shift()
        cur.left && q.push(cur.left)
        cur.right && q.push(cur.right)
        if (cur.left === null || cur.right === null) {
            this.queue.push(cur)
        }
    }
}

CBTInserter.prototype.insert = function(v) {
    const newNode = new TreeNode(v)
    let cur = this.queue[0]
    if (cur.left === null) {
        cur.left = newNode
    } else if(cur.right === null) {
        cur.right = newNode
        this.queue.shift()
    }
    this.queue.push(newNode)
    return cur.val
}

CBTInserter.prototype.getRoot = function() {
    return this.root
}