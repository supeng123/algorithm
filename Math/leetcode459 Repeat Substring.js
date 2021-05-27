var repeatSubstring = function(s) {
    const c = (s+s).slice(1,-1)
    return c.indexOf(s) !== -1
}