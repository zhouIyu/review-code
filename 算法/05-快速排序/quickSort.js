const partition = function (nums, left, right) {
    const pivot = nums[Math.floor((left + right) / 2)];
    let i = left;
    let j = right;
    while (i <= j) {
        while (nums[i] < pivot) {
            i++;
        }

        while (nums[j] > pivot) {
            j--;
        }

        if (i <= j) {
            const temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            i++;
            j--;
        }
    }
    return i;
};
let count = 0;
const quick = function (nums, left, right) {
    let index;
    console.log(`第${count++}轮：`, nums);
    if (nums.length > 1) {
        index = partition(nums, left, right); 
        console.log(index);
        if (left < index - 1) {
            quick(nums, left, index - 1);
        }

        if (index < right) {
            quick(nums, index, right);
        }
    }
    return nums;
};

const quickSort = function (nums) {
    return quick(nums, 0, nums.length - 1);
};

module.exports = quickSort;