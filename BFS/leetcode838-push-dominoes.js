var pushDominose = function(dominoes) {
    const list = dominoes.split('')
    let queue = []
    for (let [index, val] of list.entries()) {
        if (val !== '.') {
            queue.push({force:val, index:index})
        }
    }
    while(queue.length) {
        const temp = []
        while(queue.length) {
            const card = queue.pop()
            const {force, index} = card
            if (force === 'L') {
                if (list[index-1] === '.' && list[index-2] !== 'R') {
                    temp.push({force:'L', index: index-1})
                }
            }
            if (force === 'R') {
                if (list[index+1] === '.' && list[index+2] !== 'L') {
                    temp.push({force:'R', index: index+1})
                }
            }
        }

        for (const val of temp) {
            list[val.index] = val.force
        }
        queue = temp
    }
    return list.join('')
}