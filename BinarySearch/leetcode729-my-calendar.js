var MyCalendar = function() {
    this.schedual = []
}

MyCalendar.prototype.book = function(start, end) {
    const position = this.findIndex(start)
    if (this.schedual[position-1] && this.schedual[position-1][1] > start ||
        this.schedual[position] && this.schedual[position][0] < end
        ){
            return false
        }

    this.schedual.splice(position, 0, [start, end])
    return true
}

MyCalendar.prototype.findIndex = function(start) {
    let l  = 0
    let r = this.schedual.length - 1
    while (l <= r) {
        let mid = Math.floor(l + (r - l)/2)
        if (this.schedual[mid][0] < start) {
            l = mid + 1
        } else if(this.schedual[mid][0] > start) {
            r = mid - 1
        } else {
            return mid
        }
    }
    return l
}