var minAbsoluteSumDiff = function(nums1, nums2) {
    const len = nums1.length
    const copy = [...nums1].sort((a, b) => a-b)
    let total = 0
    let max = 0
    for (let i = 0; i < nums1.length; i++) {
        const diff = Math.abs(nums1[i]-nums2[i])
        if (diff) {
            total += diff
            max = Math.max(max, diff - bs(copy, nums2[i]))
        } 
    }
    return total-max

    function bs(arr, val) {
        let l = 0
        let r = len
        let la = arr[l]
        let ra = arr[r]
        while ( l < r) {
            let mid = (r-l) >> 1
            if (arr[mid] < val) {
                l = mid + 1
                la = arr[mid]
            } else if (arr[mid] > val) {
                r = mid-1
                ra = arr[mid]
            } else {
                return 0
            }
        }
        return Math.min(Math.abs(la-val), Math.abs(ra-val))
    }
};