/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
 var FindSumPairs = function(nums1, nums2) {
    this.map1 = new Map()
    this.map2 = new Map()
    this.nums2 = nums2

    for (let i = 0; i < nums1.length; i++) {
        this.map1.set(nums1[i], this.map1.get(nums1[i] || 0) + 1)
    }

    for (let j = 0; j < nums2.length; j++) {
        this.map2.set(nums2[j], this.map2.get(nums2[j] || 0) + 1)
    }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
FindSumPairs.prototype.add = function(index, val) {
    const value = this.nums2[index]
    this.nums2[index] = val + value
    this.map2.set(value, (this.map2.get(val) || 0) - 1)
    this.map2.set(this.nums2[index], (this.map2.get(this.nums2[index]) || 0) + 1)
};

/** 
 * @param {number} tot
 * @return {number}
 */
FindSumPairs.prototype.count = function(tot) {
    let res = 0
    for (let key of this.map1.keys()) {
        res += this.map1.get(key) * this.map2.get(tot-key)
    }
    return res
};

/**
 * Your FindSumPairs object will be instantiated and called as such:
 * var obj = new FindSumPairs(nums1, nums2)
 * obj.add(index,val)
 * var param_2 = obj.count(tot)
 */