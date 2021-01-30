const Stack = require('../stack');
/**
 *  十进制转换为二进制
 * @param {number} number 
 * @returns {string}
 */
function divideBy2(number) {
    let stack = new Stack();
    let decNumber = number;
    while (decNumber > 0) {
        const rem = Math.floor(decNumber % 2);
        stack.push(rem);
        decNumber = Math.floor(decNumber / 2);
    }
    let resultString = '';

    while (!stack.isEmpty()) {
        resultString += stack.pop();
    }

    return resultString;
}

console.log(divideBy2(6));