/**
 * 冒泡排序
 * @param {number[]} nums 随机数字数组
 */
const bubbleSort = function (nums) {
    const length = nums.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if (nums[j] > nums[j + 1]) {
                const temp = nums[j + 1];
                nums[j + 1] = nums[j];
                nums[j] = temp;
            }
        }
    }
    return nums;
};

module.exports = bubbleSort;