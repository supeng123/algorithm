var longestAtLeastKRepeatedString = function(s, k, hash, findList) {
    // 分治
    for (let a of s) hash[a] = (hash[a] || 0) + 1 
    for (let b in hash) hash[a] < k && findList.push(b)
    return findList.length ? s.split(new RegExp(findList.join('|'))).reduce((p,v) => v ?
     Math.max(p, longestAtLeastKRepeatedString(v, k)) : p, 0) : s.length
}