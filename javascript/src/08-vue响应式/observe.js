function isObject (value) {
    return typeof value === 'object' && value != null;
}

function updateView () {
    console.log('视图更新');
}

// 重新定义数组原型
const arrayPrototype = Array.prototype;
const newArrayPrototype = Object.create(arrayPrototype);
['push', 'pop', 'shift', 'unshift'].forEach(methodName => {
    newArrayPrototype[methodName] = function () {
        updateView();
        arrayPrototype[methodName].call(this, ...arguments);
    };
});

function defineReactive (target, key, value) {
    observe(value);
    Object.defineProperty(target, key, {
        get () {
            return value;
        },
        set (newValue) {
            if (newValue !== value) {
                value = newValue;
                observe(value);
                updateView();
            }
        }
    });
}

function observe (target) {
    if (!isObject(target)) {
        return target;
    }

    if (Array.isArray(target)) {
        target.__proto__ = newArrayPrototype;
    }

    for (const key in target) {
        if (target.hasOwnProperty(key)) {
            defineReactive(target, key, target[key]);
        }
    }
}

const data = {
    name: 'zhou',
    age: 21,
    address: {
        city: '北京'
    },
    nums: [1, 2, 3]
};

observe(data);

// data.name = '小明';
// // data.age = 22;
// data.address.city = '武汉';
// data.age = { num: 22 };
// data.age.num = 23;
// data.sex = '男';
data.nums.push(4);