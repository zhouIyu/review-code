/**
 * 顺序搜索
 * @param {*[]} array 
 * @param {*} value 
 */
const sequentialSearch = function (array, value) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
};

module.exports = sequentialSearch;