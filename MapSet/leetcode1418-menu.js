let displayTable = function(orders) {
    let m = {}
    const dishSet = new Set()
    const tableSet = new Set()
    for (const [_, table, dish] of orders) {
        dishSet.add(dish)
        tableSet.add(table)
        if (m[dish+table] == undefined) {
            m[dish+table] = 0
        }
        m[dish]++
    }
    const dishName = Array.from(dishSet).sort()
    const tableName = Array.from(tableSet).sort((a,b) => a-b)
    let m = dishName.length
    let n = tableName.length

    const res = Array.from(new Array(m), () => new Array(n).fill(0))
    
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= m; j++) {
            if (i==0 && j == 0) {
                res[i][j] = 'Table'
            }
            if (j == 0 && i > 0) {
                res[i][j] = tableName[i]
            }
            if (i > 0 && j > 0) {
                let dishNameIndex = res[i][j]
                const dishName = dishName[dishNameIndex]
                const tableName = tableName[i]
                if (m[dishName + tableName]) {
                    res[i][j] = m[dishName + tableName]
                }
            }
            
        }
    }
    return res
}