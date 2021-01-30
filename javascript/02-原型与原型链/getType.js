const getType = function (data) {
    let type = typeof data;
    if (type !== 'object') {
        return type;
    }
    return Object.prototype.toString.call(data).replace(/^\[object (\S+)\]$/, '$1');
};
