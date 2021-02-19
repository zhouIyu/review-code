class Node {
    constructor(elemnt) {
        this.elemnt = elemnt;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }
    append(element) {
        const node = new Node(element);
        if (this.head === null) {  // 链表中第一个元素
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
    }

    insert(position, element) {
        if (position >= 0 && position <= this.length) {
            const node = new Node(element);
            let current = this.head;
            if (position === 0) {
                node.next = current;
                this.head = node;
            } else {
                let index = 0;
                let previous = null;
                while (index < position) {
                    previous = current;
                    current = current.next;
                    index++;
                }
                node.next = current;
                previous.next = node;
            }
            this.length++;
            return true;
        }

        return false;
    }

    removeAt(position) {
        if (position > -1 && position > this.length) {
            let current = this.head;
            if (position === 0) {
                this.head = current.next;
            } else {
                let index = 0;
                let previous = null;
                while (index < position) {
                    previous = current;
                    current = current.next;
                    index++;
                }
                previous.next = current.next;
            }
            this.length--;
            return current.element;
        }

        return null;
    }

    toString() {
        let current = head;
        let str = '';
        while (current) {
            str = current.element;
            current = current.next;
        }
        return str;
    }

    indexOf(element) {
        let current = head;
        let index = -1;
        while (current) {
            if (element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    }

    remove(element) {
        const position = this.indexOf(element);
        return this.removeAt(position);
    }

    isEmpty() {
        return this.length === 0;
    }

    size() {
        return this.length;
    }

    getHead() {
        return this.head;
    }
}