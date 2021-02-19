const Queue = require('../queue');
/**
 * 优先队列
 */
class PriorityQueue extends Queue {
    constructor() {
        super();
    }

    enqueue(element, priority) {
        const queueElement = {
            element,
            priority
        };
        if (this.isEmpty) {
            this.items.push(queueElement);
        } else {
            let added = false;
            const length = this.size();
            for (let i = 0; i < length; i++) {
                if (priority < this.items[i].priority) {
                    this.items.splice(i, 0, queueElement);
                    added = true;
                    break;
                }
            }

            if (!added) {
                this.items.push(queueElement);
            }
        }
    }
}

const queue = new PriorityQueue();
queue.print();
queue.enqueue('hello', 1);
queue.enqueue('world', 2);
queue.print();
console.log(queue.front());