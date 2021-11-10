var StockSpanner = function() {
    this.prices = []
    this.weights = []
}

StockSpanner.prototype.next = function(price) {
    let w = 1
    while (this.prices.length > 0 && this.prices[this.prices.length-1] <= price) {
        this.prices.pop()
        w += this.weights.pop()
    }
    this.prices.push(price)
    this.weights.push(w)
    return w
}