// 输入: [1,[4,[6]]]
// 输出: 17 
// 解释: 一个 1 在深度为 3 的位置， 一个 4 在深度为 2 的位置，一个 6 在深度为 1 的位置。 1*3 + 4*2 + 6*1 = 17。

// 输入: [[1,1],2,[1,1]]
// 输出: 8 
// 解释: 四个 1 在深度为 1 的位置， 一个 2 在深度为 2 的位置。
var depthSumInverse = function(nestedList) {
    const n = nestedList.length
    let sum = 0
    let temp = 0
    let list = nestedList
    while (list.length) {
        let next = []
        for (let i = 0; i < list.length; i++) {
            let c = list[i]
            if (c.isInteger()) {
                temp += c.getInteger()
            } else {
                next = next.concat(c.getList())
            }
        }
        sum += temp
        list = next
    }
    return sum
};

let middle = [
    "310. 最小高度树"
]

let easy = [
    "744. 寻找比目标字母大的最小字母",
    "521. 最长特殊序列 Ⅰ",
    "892. 三维形体的表面积",
    "1013. 将数组分成和相等的三个部分",
    "LCP 29. 乐团站位",
    "506. 相对名次",
    "172. 阶乘后的零",
    "561. 数组拆分 I",
    "596. 超过5名学生的课",
    "387. 字符串中的第一个唯一字符",
    "812. 最大三角形面积",
    "1114. 按序打印",
    "520. 检测大写字母",
    "860. 柠檬水找零",
    "232. 用栈实现队列",
    "225. 用队列实现栈",
    "405. 数字转换为十六进制数",
    "914. 卡牌分组",
    "976. 三角形的最大周长",
    "217. 存在重复元素",
    "243. 最短单词距离",
    "326. 3的幂",
    "476. 数字的补数",
    "716. 最大栈",
    "705. 设计哈希集合",
    "747. 至少是其他数字两倍的最大数",
    "653. 两数之和 IV - 输入 BST",
    "1290. 二进制链表转整数",
    "1287. 有序数组中出现次数超过25%的元素",
    "面试题 05.03. 翻转数位",
    "1603. 设计停车系统",
    "706. 设计哈希映射",
    "643. 子数组最大平均数 I",
    "1154. 一年中的第几天",
    "595. 大的国家",
    "1025. 除数博弈",
    "1128. 等价多米诺骨牌对的数量",
    "1051. 高度检查器",
    "1122. 数组的相对排序",
    "925. 长按键入",
    "389. 找不同",
    "383. 赎金信",
    "163. 缺失的区间",
    "859. 亲密字符串",
    "1089. 复写零",
    "266. 回文排列",
    "661. 图片平滑器",
    "LCP 01. 猜数字",
    "1385. 两个数组间的距离值",
    "824. 山羊拉丁文",
    "1668. 最大重复子字符串",
    "1179. 重新格式化部门表",
    "1403. 非递增顺序的最小子序列",
    "1662. 检查两个字符串数组是否相等",
    "819. 最常见的单词",
    "1021. 删除最外层的括号",
    "977. 有序数组的平方",
    "1071. 字符串的最大公因子",
    "997. 找到小镇的法官",
    "999. 可以被一步捕获的棋子数",
    "821. 字符的最短距离",
    "1046. 最后一块石头的重量",
    "917. 仅仅反转字母",
    "1030. 距离顺序排列矩阵单元格",
    "1103. 分糖果 II",
    "501. 二叉搜索树中的众数",
    "1050. 合作过至少三次的演员和导演",
    "1078. Bigram 分词",
    "252. 会议室",
    "566. 重塑矩阵",
    "627. 变更性别",
    "1279. 红绿灯路口"
]
