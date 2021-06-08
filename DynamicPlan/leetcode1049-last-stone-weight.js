var lastStoneWeight = function(stones) {
    //背包01问题（第一层循环数量，第二层循环目标）
    let len = stones.length
    const sum = stones.reduce((a,b)=>a+b, 0)
    const target = Math.floor(sum/2)
    const dp = new Array(n+1).fill(0)
    for (let i = 0; i < len; i++) {
        const temp = stones[i]
        for (let j = target;  j >= temp; j--) {
            dp[j] = Math.max(dp[j], dp[j-temp] + temp)
        }
    }
    return sum-2*dp[target]
}