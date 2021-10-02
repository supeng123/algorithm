var basicCalculator = function(s) {
    let prefix = '+'
    let num = 0
    const stack = []
    for (let i = 0; i < s.length; i++) {
        const cur = s[i]
        if (!isNaN(cur) && cur !== ' ') {
            num = num * 10 + Number(cur)
            // num = num * 10 + cur.charCodeAt() - '0'.charCodeAt()
        }
        if (isNaN(cur)) {
            switch (prefix) {
                case '+' :
                    stack.push(num)
                    break;
                case '-' :
                    stack.push(-num)
                    break
                case '*' :
                    stack.push(stack.pop() * num)
                    break
                case '/':
                    stack.push(stack.pop()/num || 0)
            }
            num = 0
            prefix = cur
        }
    }
    return stack.reduce((a,b) => a+=b)
}