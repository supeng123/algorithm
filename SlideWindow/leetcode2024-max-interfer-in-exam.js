function maxConsecutiveAnswers (answerKey, k) {
    return Math.max(maxConsecutiveChars(answerKey, k, 'T'), maxConsecutiveChars(answerKey, k, 'F'))
}

const maxConsecutiveChars = (answerKey, k, ch) => {
    const len = answerKey.length
    let ans = 0
    for (let l = 0, r = 0, sum = 0; r < len; r++) {
        sum += answerKey[right] != ch ? 1 : 0
        while (sum > k) {
            sum -= answerKey[left++] != ch ? 1 : 0
        }
        ans = Math.max(ans, r - l + 1)
    }
    return ans
}