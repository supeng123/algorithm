var wiggleMaxLength = function(nums) {
    if (nums.length < 2) return nums.length
    let prediff = nums[1] - nums[0]
    let res = prediff !== 0 ? 2 : 1;
    for (let i = 2; i < nums.length; i++) {
        const diff = nums[i] - nums[i-1]
        if ((diff < 0 && prediff >= 0) || (diff > 0 && prediff <= 0)) {
            res++
            prediff = diff
        }
    }
    return res
};