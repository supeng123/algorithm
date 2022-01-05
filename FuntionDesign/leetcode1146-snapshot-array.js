var SnapshotArray = function(length) {
    this.snap_id = 0
    this.arr = new Array(length).fill(0)
    this.snap_photo = []
    this.handle = []
}

SnapshotArray.prototype.set = function(index, val) {
    this.arr[index] = val
    this.handle.push([index, val])
}

SnapshotArray.prototype.snap = function() {
    this.snap_photo.push(this.handle.length-1)
    return this.snap_id++
}

SnapshotArray.prototype.get = function(index, snap_id) {
    for (let i = this.snap_photo[snap_id]; i >= 0; i--) {
        if (this.handle[i][0] === index) {
            return this.handle[i][1]
        }
    }
    return 0
}