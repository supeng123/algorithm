var slidingWindowMedian = function(nums, k) {
    if (!k || !nums.length) return []
    const pq = PrioritizedQueue()
    const list = []
    for (let i = 0; i < nums.length; i++) {
        pq.add(nums[i])
        if (i >= k) pq.delete(nums[i-k])
        if (i >= k -1) {
            let val = getMedian(k & 1)
            list.push(val)
        }
    }
}

class PrioritizedQueue {
    cosntrucor() {
        this.queue = []
    }

    add(val) {
        let left = 0
        let right = this.queue.length -1
        while (left <= right) {
            let mid = (left+right) >> 1
            if (this.queue[mid] > val) {
                right = mid-1
            } else {
                left = mid+1
            }
        }
        this.queue.splice(left, 0, val)
    }

    delete(val) {
        let index = this.queue.indexOf(val)
        this.queue.splice(index, 1)
    }

    getMedian(isOdd) {
        let mid = this.queue.length/2 | 0
        return isOdd ? this.queue[mid] : (this.queue[mid-1] + this.queue[mid])/2
    }
}

