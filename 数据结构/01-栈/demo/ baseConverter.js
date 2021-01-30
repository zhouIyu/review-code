const Stack = require('../stack');

/**
 * 十进制数转换
 * @param {number} number 要转换的十进制数
 * @param {number} base 转换的几进制
 */
function baseConverter(number, base) {
    let stack = new Stack();
    let decNumber = number;
    const digits = '0123456789ABCDEF';
    let resultString = '';

    while (decNumber > 0) {
        const rem = Math.floor(decNumber % base);
        stack.push(rem);
        decNumber = Math.floor(decNumber / base);
    }

    while (!stack.isEmpty()) {
        resultString += digits[stack.pop()];
    }
    return resultString;
}

console.log(baseConverter(17, 8));