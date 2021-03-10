function flat (arr, num = 1) {
    if (num === 0) {
        return arr;
    }
    const isDeep = arr.some(item => item instanceof Array);
    if (!isDeep) {
        return arr;
    }
    const res = Array.prototype.concat.apply([], arr);
    return flat(res, num - 1);
}