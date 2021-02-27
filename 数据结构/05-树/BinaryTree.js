class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const node = new Node(value);
        if (this.root === null) {
            this.root = node;
        } else {
            this._insertNode(this.root, node);
        }
    }

    _insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this._insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this._insertNode(node.right, newNode);
            }
        }
    }

    // 中序遍历
    inOrderTraverse(callback) {
        this._inOrderTraverseNode(this.root, callback);
    }

    _inOrderTraverseNode(node, callback) {
        if (node !== null) {
            this._inOrderTraverseNode(node.left, callback);
            callback(node.value);
            this._inOrderTraverseNode(node.right, callback);
        }
    }

    // 先序遍历
    preOrderTraverse(callback) {
        this._preOrderTraverseNode(this.root, callback);
    }

    _preOrderTraverseNode(node, callback) {
        if (node !== null) {
            callback(node.value);
            this._preOrderTraverseNode(node.left, callback);
            this._preOrderTraverseNode(node.right, callback);
        }
    }

    // 后序遍历
    postOrderTraverse(callback) {
        this._postOrderTraverseNode(this.root, callback);
    }

    _postOrderTraverseNode(node, callback) {
        if (node !== null) {
            this._preOrderTraverseNode(node.left, callback);
            this._preOrderTraverseNode(node.right, callback);
            callback(node.value);
        }
    }

    // 最大值
    max() {
        if (!this.root) {
            return null;
        }
        let node = this.root;
        while (node && node.right !== null) {
            node = node.right;
        }
        return node.value;
    }

    // 最小值
    min() {
        const node = this._findMinNode(this.root);
        return node.value;
    }

    _findMinNode(node) {
        if (!node) {
            return null;
        }

        while (node && node.left !== null) {
            node = node.left;
        }
        return node;
    }

    // 判断是否存在
    has(value) {
        return this._hasNode(this.root, value);
    }

    _hasNode(node, value) {
        if (node === null) {
            return false;
        }

        if (node.value < value) {
            return this._hasNode(node.right, value);
        } else if (node.value > value) {
            return this._hasNode(node.left, value);
        } else {
            return true;
        }
    }

    remove(value) {
        this.root = this._removeNode(this.root, value);
    }

    _removeNode(node, value) {
        if (node === null) {
            return null;
        }

        if (node.value < value) {
            node.right = this._removeNode(node.right, value);
            return node;
        } else if (node.value > value) {
            node.left = this._removeNode(node.left, value);
            return node;
        } else {
            if (!node.left && !node.right) {
                node = null;
                return node;
            }

            if (!node.left) {
                node = node.right;
                return node;
            } else if (!node.right) {
                node = node.left;
                return node;
            }

            let temp = this._findMinNode(node.right);
            node.value = temp.value;
            node.right = this._removeNode(node.right, temp.value);
            return node;
        }
    }
}

function print(value) {
    console.log(value + ' ');
}

const bt = new BinaryTree();

bt.insert(10);
bt.insert(8);
bt.insert(3);
bt.insert(11);
bt.insert(12);
bt.insert(15);
bt.insert(4);
bt.insert(8);
bt.insert(18);
bt.insert(6);
bt.inOrderTraverse(print);
console.log('-----');
bt.preOrderTraverse(print);

print('max : ' + bt.max());
print('min : ' + bt.min());
module.exports = BinaryTree;