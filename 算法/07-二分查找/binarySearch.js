const quickSort = require('../05-快速排序/quickSort');

/**
 * 二分查找法
 * @param {*[]} array 
 * @param {*} value 
 */
const binarySearch = function (array, value) {
    array = quickSort(array);
    let low = 0;
    let high = array.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const element = array[mid];
        if (element > value) {
            high = mid - 1;
        } else if (element < value) {
            low = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
};

module.exports = binarySearch;