var rearrangeBarcodes = function(barcodes) {
    const m = {}
    for (let barcode of barcodes) {
        m[barcode] = (m[barcode] || 0) + 1
    }
    const list = Object.keys(m).map(k => [Number(k), m[k]])
    list.sort((a,b) => a[1] - b[1])
    
    const res = new Array(barcodes.length)
    let index = 0
    while (list.length) {
        let [barcode, count] = list.pop()
        while (count-- > 0) {
            if (index >= barcodes.length) index = 1
            res[index] = barcode
            index += 2
        }
    }
    return res
}