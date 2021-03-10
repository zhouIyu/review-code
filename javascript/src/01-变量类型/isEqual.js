function isObject (value) {
    return typeof value === 'object' && value != null;
}

function isEqual (obj1, obj2) {
    // 1.判断是否是值类型
    if (!isObject(obj1) || !isObject(obj2)) {
        return obj1 === obj2;
    }
    // 2.判断是否是一个
    if (obj1 === obj2) {
        return true;
    }

    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);
    // 3.判断 key的个数是否一致
    if (obj1Keys.length !== obj2Keys.length) {
        return false;
    }

    // 4.以obj1为基准，和obj2依次递归比较
    for (const key in obj1Keys) {
        const res = isEqual(obj1[key], obj2[key]);
        if (!res) {
            return false;
        }
    }
    // 5. 全相等
    return true;
}

export default isEqual