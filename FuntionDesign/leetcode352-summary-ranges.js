var SummaryRanges = function() {
    this.parents = []
};

/** 
 * @param {number} val
 * @return {void}
 */
SummaryRanges.prototype.addNum = function(val) {

};

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function() {

};

SummaryRanges.prototype.find = function(x) {
    if (this.parents[x] === x) {
        return x
    }
    this.parents[x] = this.find(this.parents[x])
    return this.parents[x]
};

