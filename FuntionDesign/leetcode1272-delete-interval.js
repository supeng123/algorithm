
// Task: Implement a class named 'RangeList'
// A pair of integers define a range, for example: [1, 5). This range
// includes integers: 1, 2, 3, and 4.
// A range list is an aggregate of these ranges: [1, 5), [10, 11), [100,
// 201)
/**
*
* NOTE: Feel free to add any extra member variables/functions you like.
*/
class RangeList {
    constructor() {
        this.ranges = []
    }
/**
* Adds a range to the list
* @param {Array<number>} range - Array of two integers that specify
beginning and end of range.
*/
add(range) {
    const intervals = this.ranges
    const len = intervals.length
    let [addL, addR] = range
    let i = 0
    let res = []
    //[1,2] [4,6] ,[7,9]   [5,8]
    while (i < len && addL > intervals[i][1]) {
        res.push(intervals[i])
        i++
    }
    while (i < len && addR >= intervals[i][0]) {
        addL = Math.min(addL, intervals[i][0])
        addR = Math.max(addR, intervals[i][1])
        i++
    }
    res.push([addL, addR])
    while (i < len) {
        res.push(intervals[i]);
        i++;
    }
    this.ranges = res
}
/**
* Removes a range from the list
* @param {Array<number>} range - Array of two integers that specify
beginning and end of range.
*/
remove(range) {
    const [removeL, removeR] = range
    const res = []
    //[1,2] [4,6] ,[7,9]   [5,8]
    for (const [l, r] of this.ranges) {
        if (removeL > l) res.push([l, Math.min(r, removeL)])
        if (removeR < r) res.push([Math.max(l, removeR), r])
    }
    this.ranges = res
}
/**
* Prints out the list of ranges in the range list
*/
print() {
    let s = ''
    for (const [l, r] of this.ranges) {
        s +=`[${l}, ${r}) `
    }
    console.log(s)
    return s
}
}
// Example run
const rl = new RangeList();
rl.add([1, 5]);
rl.print();
// Should display: [1, 5)
rl.add([10, 20]);
rl.print();
// Should display: [1, 5) [10, 20)
rl.add([20, 20]);
rl.print();
// Should display: [1, 5) [10, 20)
rl.add([20, 21]);
rl.print();
// Should display: [1, 5) [10, 21)
rl.add([2, 4]);
rl.print();
// Should display: [1, 5) [10, 21)
rl.add([3, 8]);
rl.print();
// Should display: [1, 8) [10, 21)
rl.remove([10, 10]);
rl.print();
// Should display: [1, 8) [10, 21)
rl.remove([10, 11]);
rl.print();
// Should display: [1, 8) [11, 21)
rl.remove([15, 17]);
rl.print();
// Should display: [1, 8) [11, 15) [17, 21)
rl.remove([3, 19]);
rl.print();
// Should display: [1, 3) [19, 21)