/**
 * 手写new的实现
 * @param Parent 构造器
 * @param rest 参数
 * @return {*}
 */
function myNew (Parent, ...rest) {
    // 以构造器的prototype属性为原型，创建新对象
    const obj = Object.create(Parent.prototype);
    // 将this和调用参数传给构造器，执行
    const result = Parent.apply(obj, rest);
    // 如果构造器没有返回，则返回新对象；否则，返回return的值
    return result instanceof Object ? result : obj;
}

export default myNew;
