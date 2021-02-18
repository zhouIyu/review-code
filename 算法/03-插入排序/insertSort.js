/**
 * 插入排序
 * @param {number[]} nums 
 */
const insertSort = function (nums) {
    const length = nums.length;
    let j = 0;
    let temp = 0;
    for (let i = 1; i < length; i++) {
        j = i; // 把指针指在当前索引
        temp = nums[i]; // 存储当前索引值
        while (j > 0 && nums[j - 1] > temp) { // 将指针向前移动
            nums[j] = nums[j - 1]; // 前一个大于当前，则将前一个值赋值到当前索引上
            j--;
        }
        nums[j] = temp;
    }
    return nums;
};

module.exports = insertSort;