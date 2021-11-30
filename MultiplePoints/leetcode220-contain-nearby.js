var containsNearbyAlmostDuplicate = function(nums, k, t) {
    let l = 0
    let r = 0
    let n = nums.length
    if (n<2 || k<1) return false;
    while (l < n - 1) {
        r = l + 1
        while (r <= l+k && r < n) {
            if (Math.abs(nums[l]-nums[r]) <= t) return true
            r++
        }
        l++
    }
    return false
};