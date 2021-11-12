var FlatNestedIterator = function(nestedList) {
    this.nums = []
    this.index = 0
    for (const node of nestedList) {
        dfs(node, this.nums)
    }
}

FlatNestedIterator.prototype.hasNext = function() {
    return this.index < this.nums.length
}

FlatNestedIterator.prototype.next = function() {
    return this.nums[this.index++]
}

function dfs(nestedInteger, nums) {
    if (nestedInteger.isInteger()) {
        nums.push(nestedInteger.getInteger())
    } else {
        for (const child of nestedInteger.getList()) {
            dfs(child, nums)
        }
    }
}