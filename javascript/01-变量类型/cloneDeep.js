function cloneDeep(obj) {
    if (typeof obj !== 'object' || obj == null) {
        return obj;
    }
    let result;
    if (Array.isArray(obj)) {
        result = [];
    } else {
        result = {};
    }

    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            result[key] = cloneDeep(obj[key]);
        }
    }

    return result;
}

const obj1 = {
    name: 'zhou',
    age: 10,
    sex: Symbol('男'),
    arr: [1, 2, 3, 4],
    x: {
        a: {
            b: {
                y: '666'
            }
        }
    }
};

const obj2 = cloneDeep(obj1);
console.log(obj1 === obj2); // false

const obj3 = obj1;
console.log(obj1 === obj3); // true