/**
 * 斐波那契数列
 * @param {number} num
 * @return {number}
 */
const fib2 = function (num) {
    if (num === 1 || num === 2) {
        return 1;
    }
    return fib2(num - 1) + fib2(num - 2);
};

module.exports = fib2;