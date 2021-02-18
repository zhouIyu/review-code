/**
 * 选择排序
 * @param {number[]} nums 
 */
const selectSort = function (nums) {
    const length = nums.length;
    let min = 0;
    for (let i = 0; i < length - 1; i++) {
        min = i;
        for (let j = i + 1; j < length; j++) {
            if (nums[min] > nums[j]) {
                min = j;
            }
        }
        if (i !== min) {
            const temp = nums[i];
            nums[i] = nums[min];
            nums[min] = temp;
        }
    }
    return nums;
};

module.exports = selectSort;