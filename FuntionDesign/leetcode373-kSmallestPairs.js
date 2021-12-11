var kSmallesetPairs = function(nums1, nums2, k) {
    const maxHeap = new MaxHeap()

    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (maxHeap.heap.length < k) {
                maxHeap.heap.push([nums1[i], nums2[j]])
                maxHeap.shiftUp(maxHeap.length-1)
            } else if (sum(maxHeap[0]) >= (nums1[i]+nums2[j])){
                maxHeap.heap[0] = [nums1[i], nums2[j]]
                maxHeap.shiftDown(0)
            }
        }
    }

    return maxHeap.heap
}

function MaxHeap() {
    this.heap = []
}

MaxHeap.prototype.float = function(i) {
    let parent = (i-1)/2 | 0
    if (sum(this.heap[i]) > sum(this.heap[parent])) {
        swap(this.heap, i, parent)
        this.float(this.heap, parent)
    }
}

MaxHeap.prototype.sink = function(i) {
    let left = i*2+1
    if (left >= this.heap.length) return
    if (left + 1 < this.heap.length && sum[this.heap[left]] < sum(this.heap[left+1])) left++
    if (sum(this.heap[i]) <= sum(this.heap[left])) {
        swap(this.heap, i, left)
        this.sink(this.heap, left)
    }
}

function sum(n) {
    return n[0] + n[1]
}

function swap(maxHeap, i, j) {
    const temp = maxHeap[i]
    maxHeap[i] = maxHeap[j]
    maxHeap[j] = temp
}

function MinHeap() {
    this.heap = []
}

MinHeap.prototype.float = function(i) {
    let parent = (i-1)/2 | 0
    if (sum(this.heap[i]) < sum(this.heap[parent])) {
        swap(this.heap, i, parent)
        this.float(this.heap, parent)
    }
}

MinHeap.prototype.sink = function(i) {
    let left = i*2+1
    if (left >= this.heap.length) return
    if (left + 1 < this.heap.length && sum[this.heap[left]] > sum(this.heap[left+1])) left++
    if (sum(this.heap[i]) >= sum(this.heap[left])) {
        swap(this.heap, i, left)
        this.sink(this.heap, left)
    }
}

var kLargestPairs = function(nums1, nums2, k) {
    const minHeap = new MinHeap()

    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (minHeap.heap.length < k) {
                minHeap.heap.push([nums1[i], nums2[j]])
                minHeap.shiftUp(minHeap.heap.length-1)
            } else if (sum(maxHeap[0]) <= (nums1[i]+nums2[j])){
                minHeap.heap[0] = [nums1[i], nums2[j]]
                minHeap.shiftDown(0)
            }
        }
    }

    return minHeap.heap
}
