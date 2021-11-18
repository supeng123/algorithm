//45
var jump = function(nums) {
    let end = 0;
    let maxPosition = 0; 
    let steps = 0;
    for(let i = 0; i < nums.length - 1; i++){
        //找能跳的最远的
        maxPosition = Math.max(maxPosition, nums[i] + i); 
        if( i == end){ //遇到边界，就更新边界，并且步数加一
            end = maxPosition;
            steps++;
        }
        console.log(maxPosition, end, steps)
    }
    return steps;
};

//55
var jumpGame = function(arr) {
    let last = arr.length - 1
    for (let i = arr.length - 2; i >=0; i--) {
        if (arr[i] + i >= last) {
            last = i
        }
    }
    return last === 0
}

var jumpGame = function(arr, d) {
    let len = arr.length
    const memo = new Array(len).fill(-1)
    let result = 1
    arr.forEach((item, idx) => {
        result = Math.max(result, dfs(idx))
    })
    return result

    function dfs(index) {
        if (memo[index] !== -1) return memo[index]
        let res = 1
        for (let i = index+1; i < len && i <= index + d && arr[index] > arr[i]; i++) {
            res = Math.max(res, dfs(i)+1)
        }

        for (let i = index-1; i >= 0 && i >= index - d && arr[index] > arr[i]; i--) {
            res = Math.max(res, dfs(i)+1)
        }

        memo[index] = res
        return res
    }
}