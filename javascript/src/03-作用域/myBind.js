Function.prototype.myBind = function () {
    // 将参数变成数组
    const args = Array.prototype.slice.call(arguments);
    // 获取需要的this对象
    const that = args.shift();
    // 获取当前的函数
    const self = this;
    return function () {
        return self.apply(that, args);
    };
};