/**
 * 创建随机数组
 * @param {number} size 数组长度
 * @returns {number[]}
 */
const createArray = function (size) {
    const array = [];
    for (let i = 0; i < size; i++) {
        const num = Math.floor(Math.random() * 100) + 1;
        array.push(num);
    }
    return array;
};

module.exports = createArray; 