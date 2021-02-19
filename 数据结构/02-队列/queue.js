class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(elements) {
        this.items.push(elements);
    }

    dequeue() {
        return this.items.shift();
    }

    front() {
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items);
    }
}

module.exports = Queue;