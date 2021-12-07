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

const Item = ({itemInfo, onClick}) => {
    console.log('item render')
    return <li onClick={onClick}>{itemInfo}</li>
}

const ItemInfo = () => {
    const [itemData, setItemData] = React.useState(() => {
        return [0,1,2,3,4,5,6,7,8,9]
    })

    const hanleChange = React.useCallback(()=> {
        setItemData([1,2,3,4,5,6,7,8,9])
    },[itemData])


    return (
        <div>
            <button onClick={hanleChange}>A</button>
            <Child itemData={itemData}></Child>
        </div>
    )
}