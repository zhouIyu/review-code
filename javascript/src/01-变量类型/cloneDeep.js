/**
 * 深拷贝
 * @param obj 需要拷贝的对象
 */
function cloneDeep (obj = {}) {
    if (typeof obj !== 'object' || obj == null) {
        return obj;
    }
    let result;
    if (obj instanceof Array) {
        result = [];
    } else {
        result = {};
    }

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = cloneDeep(obj[key]);
        }
    }

    return result;
}

export default cloneDeep;