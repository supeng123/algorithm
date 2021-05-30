var kthLargest = function (k, nums) {
    this.heap = new MinHeap(k)
    nums.forEach(item => this.heap.add(item))
}

kthLargest.prototype.add = function(val) {
    this.heap.add(val)
    return this.heap.heap[0]
}

var MinHeap = function (K) {
    this.heap = []
    this.k = K
}

MinHeap.prototype.add = function(num) {
    if (this.heap.length < this.k) {
        this.heap.push(num)
        this.up(this.heap.length-1)
    } else if (num > this.heap[0]) {
        this.heap[0] = num
        this.down(0)
    }
}

MinHeap.prototype.up = function(index) {
    while (index > 0) {
        const parent = this.index-1 >> 1
        if (this.heap[parent] > this.heap[index]) {
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]]
            index = parent
        } else {
            break
        }
    }
}

MinHeap.prototype.down = function(index) {
    while (2*index+1 < this.heap.length-1) {
        const child = index*2+1
        if (child+1 < this.heap.length && this.heap[child+1] < this.heap[child]) {
            child++
        }
        if (this.heap[index] > this.heap[child]) {
            [this.heap[child], this.heap[index]] = [this.heap[index], this.heap[child]]
            index = child
        } else {
            break
        }
    }
}