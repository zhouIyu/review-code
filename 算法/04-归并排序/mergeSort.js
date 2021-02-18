const merge = function (left, right) {
    const result = [];
    let indexLeft = 0;
    let indexRight = 0;
    while (indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft] < right[indexRight]) {
            result.push(left[indexLeft++]);
        } else {
            result.push(right[indexRight++]);
        }
    }

    while (indexLeft < left.length) {
        result.push(left[indexLeft++]);
    }

    while (indexRight < right.length) {
        result.push(right[indexRight++]);
    }
    return result;
};

const mergeSortRec = function (nums) {
    const length = nums.length;
    if (length === 1) {
        return nums;
    }
    const mid = Math.floor(length / 2);
    const left = nums.slice(0, mid);
    const right = nums.slice(mid, length);
    return merge(mergeSortRec(left), mergeSortRec(right));
};

const mergeSort = function (nums) {
    return mergeSortRec(nums);
};

module.exports = mergeSort;