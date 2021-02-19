const Queue = require('../queue');

/**
 * 击鼓传花 （循环队列）
 * @param {string[]} nameList 
 * @param {number} num
 * @returns {string} 
 */
const hotPotato = function (nameList, num) {
    const queue = new Queue();
    nameList.forEach(name => queue.enqueue(name));
    let eliminated = '';// 淘汰的人
    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }
        eliminated = queue.dequeue();
        console.log(`${eliminated} 淘汰`);
    }
    return queue.dequeue();
};

const names = ['a', 'b', 'c', 'd', 'e'];
const num = Math.ceil(Math.random() * 10);
console.log(`传递次数: ${num}`);
const winner = hotPotato(names, num);
console.log(`${winner} 胜利！！！`);