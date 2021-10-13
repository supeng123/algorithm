var SummaryRanges = function() {
    this.parents = new Array(1002)
};

/** 
 * @param {number} val
 * @return {void}
 */
SummaryRanges.prototype.addNum = function(val) {
    if (this.parents[val] === undefined) {
        this.parents[val] = val + 1
    }
    this.find(val)
};

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function() {
    const ans = []
    let i = 0
    while (i < 1001) {
        if (this.parents[i] !== undefined) {
            let temp = []
            temp[0] = i
            temp[1] = this.find(this.parents[i]) - 1
            i = temp[i] + 1
            ans.push(temp)
        } else {
            i++
        }
    }
    return ans   
};

SummaryRanges.prototype.find = function(x) {
    if (this.parents[x] === x) {
        return x
    }
    this.parents[x] = this.find(this.parents[x])
    return this.parents[x]
};

