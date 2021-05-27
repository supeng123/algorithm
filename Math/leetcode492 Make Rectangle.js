var makeRectangle = function(area) {
    let h = Math.floor(Math.sqrt(area))
    while (area%h !== 0) h--
    return [area/h, h]
}