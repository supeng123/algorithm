var canFinish = function(numCourses, prerequisites) {
    const inDegree = new Array(numCourses).fill(0)
    const m = {}
    for (let i = 0; i < prerequisites.length; i++) {
        const course = prerequisites[i][0]
        const preCourse = prerequisites[i][1]
        inDegree[course]++
        if (m[preCourse]) {
            m[preCourse].push(course)
        } else {
            m[preCourse] = [course]
        }
    }

    const queue = []
    for (let i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) queue.push(i)
    }
    let counts = 0
    while (queue.length !== 0) {
        const curIndex = queue.shift()
        counts++
        const toAddQueue = m[curIndex]
        for (let i = 0; i < toAddQueue.length; i++) {
            inDegree[toAddQueue[i]]--
            if (inDegree[toAddQueue[i]] === 0) {
                queue.push(toAddQueue[i])
            }
        }
    }
    return counts === numCourses
}