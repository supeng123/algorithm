var numOfAtoms = function(formula) {
    let n = formula.length
    let i = 0
    const stack = [new Map()]
    while (i < n) {
        const parseAtom = () => {
            const sb = [];
            sb.push(formula[i++]); // 扫描首字母
            while (i < n && formula[i] >= 'a' && formula[i] <= 'z') {
                sb.push(formula[i]); // 扫描首字母后的小写字母
                i++
            }
            return sb.join('');
        }

        const parseNum = () => {
            if (i === n || isNaN(Number(formula[i]))) {
                return 1; // 不是数字，视作 1
            }
            let num = 0;
            while (i < n && !isNaN(Number(formula[i]))) {
                num = num * 10 + formula[i].charCodeAt() - '0'.charCodeAt(); // 扫描数字
                i++
            }
            return num;
        }

        if (formula[i] === '(') {
            i++
            stack.unshift(new Map())
        } else if (formula[i] === ')') {
            i++
            const number = parseNum()
            const popMap = stack.shift()
            const topMap = stack[0]
            for (const [atom, v] of popMap) {
                topMap.set(atom, (popMap.get(atom) || 0) + v * number)
            }
        }
        const atom = parseAtom()
        const numbers = parseNum()
        const topMap = stack[0]
        topMap.set(atom, (topMap.get(charators) || 0) + numbers);

    }

    let m = stack.pop()
    m = Array.from(m)
    m.sort()
    const res = []
    for (const[atom, count] of m) {
        res.push(atom)
        if (count > 1) res.push(count)
    }
    return res.join('')

}