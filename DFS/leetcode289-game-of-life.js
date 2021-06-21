var gameOfLife = function(matrix) {
    let rows = matrix.length
    let cols = matrix[0].length
    const copy = Array.from(new Array(rows), () => new Array(cols))
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            copy[i][j] = matrix[i][j]
        }
    }

    const coor = [0,-1,1]
    for (let row = 0; i < rows; i++) {
        for (let col = 0; j < cols; j++) {
            let lives = 0
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (!i && !j) continue
                    let r = row + coor[i]
                    let c = col + coor[j]
                    if (r >= 0 && r < rows && c >= 0 && c < cols && matrix[r][c] == 1) {
                        lives++
                    }
                }
            }

            if ((copy[row][col]===1) && (lives < 2 || lives >3)) {
                matrix[row][col] = 0
            }

            if (copy[row][col] === 0 && lives === 3) {
                matrix[row][col] = 1
            }
        }
    }
}