var taskScheduler = function(tasks, n) {
    //桶
    if (n === 0) return tasks.length
    const height = new Array(26).fill(0)
    tasks.forEach((task, i)=> {
        height[task.charCodeAt()-65]++
    })
    const max = Math.max(...height)
    const maxCount = 0
    height.forEach(n => n===max && maxCount++)
    return Math.max((max-1)*(n+1)+maxCount, tasks.length)
}