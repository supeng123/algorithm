var fairCandySwap = function(aliceSizes, bobSizes) {
    const s = new Set(aliceSizes)
    const a = aliceSizes.reduce((a,b)=>a+=b,0)
    const b = bobSizes.reduce((a,b)=>a+=b,0)
    const delta = Math.floor((a-b)/2)
    for (let i = 0 ; i < bobSizes.length; i++) {
        if (s.has(delta+bobSizes[i])) {
            return [delta+bobSizes[i], bobSizes[i]]
        }
    }
}