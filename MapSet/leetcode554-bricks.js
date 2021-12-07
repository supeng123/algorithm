function bricks(wall) {
    let m = {}
    let max  = 0
    for (let i = 0; i < wall.length; i++) {
        const widths = wall[i]
        let sum = 0
        for (let j = 0; j < widths.length - 1; j++) {
            sum = sum + widths[j]
            if (m[sum] == undefined) {
                m[sum] = 0
            }
            m[sum]++
        }
    }
    for (let key in m) {
        max = Math.max(m[key], max)
    }
    return wall.length - max
}