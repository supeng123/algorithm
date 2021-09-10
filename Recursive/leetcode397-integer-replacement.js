var integerReplacement = function(n) {
    return recur(n)

    function recur(number) {
        if (number === 1) return 0
        if (number % 2 == 0) {
            return (recur(number / 2) + 1) % 1000000009
        } else {
            return (Math.min(recur(n-1), recur(n+1)) + 1) % 1000000009
        }
    }
}