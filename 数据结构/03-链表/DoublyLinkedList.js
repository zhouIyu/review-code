class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insert(position, element) {
        if (position >= 0 && position <= this.length) {
            const node = new Node(element);
            let current = this.head;
            if (position === 0) {
                if (!head) {
                    this.head = node;
                    this.tail = node;
                } else {
                    node.next = current;
                    current.prev = node;
                    this.head = node;
                }
            } else if (position === this.length) {
                current = this.tail;
                current.next = node;
                node.prev = current;
                this.tail = node;
            } else {
                let index = 0;
                let previous = null;
                while (index < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
                node.prev = previous;
                current.prev = node;
            }
            this.length++;
            return true;
        }

        return false;
    }

    removeAt(position) {
        if (position > -1 && position < this.length) {
            let current = head;
            if (position === 0) {
                this.head = current.next;
                if (this.length === 1) {
                    this.tail = null;
                } else {
                    this.head.prev = null;
                }
            } else if (position === this.length - 1) {
                current = this.tail;
                this.tail = current.prev;
                this.tail.next = null;
            } else {
                let index = 0;
                let previous = null;
                while (index < position) {
                    previous = current;
                    current = current.next;
                }

                previous.next = current.next;
                current.next.prev = previous;
            }
            this.length--;
            return true;
        }
        return false;
    }
}