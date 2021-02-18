/**
 * 斐波那契数列
 * @param {number} num
 * @return {number}
 */
const fib1 = function (num) {
    let n1 = 1;
    let n2 = 1;
    let n = 1;
    for (let i = 3; i <= num; i++) {
        n = n1 + n2;
        n1 = n2;
        n2 = n;
    }
    return n;
};

module.exports = fib1;