var FreqStack = function() {
    this.MaxFreq = 0
    this.valToFreq = new Map()
    this.freqToVal = new Map()
}

FreqStack.prototype.push = function(val) {
    const freq = (this.valToFreq.get(val) || 0) + 1
    this.valToFreq.set(val, freq)

    if (!this.freqToVal.has(freq)) this.freqToVal.set(freq, [])
    this.freqToVal.get(freq).push(val)
    this.MaxFreq = Math.max(this.MaxFreq, freq)
}

FreqStack.prototype.pop = function() {
    const vals = this.freqToVal.get(this.MaxFreq)
    const v = vals.pop()

    let freq = this.valToFreq.get(v) - 1
    this.valToFreq.set(v, freq)
    if (vals.length === 0) {
        this.MaxFreq--
    }
    return v
}