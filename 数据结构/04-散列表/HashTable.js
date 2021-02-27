const loseloseHashCode = function (key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
    }
    return hash % 37;
};

class HashTable {
    constructor() {
        this.table = [];
    }

    put(key, value) {
        const position = loseloseHashCode(key);
        console.log(position + ' - ' + key);
        this.table[position] = value;
    }

    get(key) {
        return this.table[loseloseHashCode(key)];
    }

    remove(key) {
        this.table[loseloseHashCode(key)] = undefined;
    }
}